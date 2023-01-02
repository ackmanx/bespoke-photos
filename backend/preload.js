const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('bs', {
  loadDirectory: (path) => ipcRenderer.invoke('load-directory', path),
})
