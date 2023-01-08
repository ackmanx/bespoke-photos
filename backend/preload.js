const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('bs', {
  getDirectoryTree: (path) => ipcRenderer.invoke('get-directory-tree', path),
  loadDirectory: (path) => ipcRenderer.invoke('load-directory', path),
  deleteRejected: (rejectedList) => ipcRenderer.invoke('delete-rejected', rejectedList),
})
