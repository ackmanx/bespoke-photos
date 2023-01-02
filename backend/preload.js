const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('bs', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
})
