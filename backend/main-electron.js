const { app, BrowserWindow, ipcMain, protocol } = require('electron')
const fs = require('fs')
const { STORAGE_PATH } = require('./utils')
const Window = require('./electron-browser-window')
const Store = require('electron-store')

verifyCacheFolderExists()

const store = new Store()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  ipcMain.handle('get-directory-tree', require('./get-directory-tree').handleGetDirectoryTree)
  ipcMain.handle('load-directory', require('./load-directory').handleLoadDirectory)
  ipcMain.handle('delete-rejected', require('./delete-rejected').handleDeleteRejected)

  ipcMain.on('electron-store-get', async (event, val) => {
    event.returnValue = store.get(val)
  })
  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set(key, val)
  })

  // Electron won't let you access files via `files://` protocol
  // But if you name your own protocol, you can use it like you would `files://`
  // CSP needs to be updated in `index.html` to allow it too
  protocol.registerFileProtocol('bs', (request, callback) => {
    callback({ path: request.url.substring(5) })
  })

  Window.create()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) Window.create()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

function verifyCacheFolderExists() {
  if (!fs.existsSync(STORAGE_PATH)) {
    fs.mkdirSync(STORAGE_PATH)
  }
}
