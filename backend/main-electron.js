const { app, BrowserWindow, ipcMain, protocol } = require('electron')
const path = require('path')
const fs = require('fs')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'Bespoke Photos',
    backgroundColor: '#1e1f22',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // This switch allows us to use a dev server or a production build
  const startUrl = process.env.WEB_URL || `file://${path.join(__dirname, '../build/index.html')}}`

  mainWindow.maximize()
  mainWindow.loadURL(startUrl)

  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools()
  }
}

verifyCacheFolderExists()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  ipcMain.handle('get-directory-tree', require('./get-directory-tree').handleGetDirectoryTree)
  ipcMain.handle('load-directory', require('./load-directory').handleLoadDirectory)
  ipcMain.handle('delete-rejected', require('./delete-rejected').handleDeleteRejected)

  // Electron won't let you access files via `files://` protocol
  // But if you name your own protocol, you can use it like you would `files://`
  // CSP needs to be updated in `index.html` to allow it too
  protocol.registerFileProtocol('bs', (request, callback) => {
    callback({ path: request.url.substring(5) })
  })

  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function verifyCacheFolderExists() {
  const appStorage = `${app.getPath('home')}/.bespoke`

  if (!fs.existsSync(appStorage)) {
    fs.mkdirSync(appStorage)
  }
}
