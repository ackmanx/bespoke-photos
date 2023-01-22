const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('bs', {
  /*
   * Storage
   */
  get(key) {
    return ipcRenderer.sendSync('electron-store-get', key)
  },
  set(property, val) {
    ipcRenderer.send('electron-store-set', property, val)
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
