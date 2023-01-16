const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('bs', {
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
