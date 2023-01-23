const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('bs', {
  /*
   * Storage / Config
   */
  get: (key) => ipcRenderer.invoke('electron-store-get', key),
  set: (key, value) => ipcRenderer.invoke('electron-store-set', key, value),
  addRootFolder: () => {
    ipcRenderer.send('select-folder')

    ipcRenderer.on('open-file-paths', (event, data) => {
      console.log(`Canceled? ${data.canceled}`)
      console.log(`File Paths: ${data.filePaths.join(';')}`)
    })
  },

  /*
   * Render to Main
   */
  /**
   * @param path
   * @returns {Promise<any>}
   */
  getDirectoryTree: (path) => ipcRenderer.invoke('get-directory-tree', path),
  /**
   * @param path
   * @returns {Promise<any>}
   */
  loadDirectory: (path) => ipcRenderer.invoke('load-directory', path),
  /**
   * @param rejectedList
   * @returns {Promise<any>}
   */
  deleteRejected: (rejectedList) => ipcRenderer.invoke('delete-rejected', rejectedList),

  /*
   * Main to Render
   */
  /**
   * @param callback
   * @returns {Electron.IpcRenderer}
   */
  onLoadingProgress: (callback) => ipcRenderer.on('loading-progress', callback),
})
