const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('bs', {
  getDirectoryTree: (path) => ipcRenderer.invoke('get-directory-tree', path),
})
