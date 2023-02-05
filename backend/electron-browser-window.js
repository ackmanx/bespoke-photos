const { app, BrowserWindow } = require('electron')
const path = require('path')

// If `create` is called twice, does it have two instances or is this a singleton that's overridden?
/** @type {Electron.CrossProcessExports.BrowserWindow} */
let window

/**
 *
 * @returns {Electron.CrossProcessExports.BrowserWindow}
 */
function create() {
  window = new BrowserWindow({
    title: `Bespoke Photos - ${new Date()}`,
    backgroundColor: '#1e1f22',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // This switch allows us to use a dev server or a production build
  const startUrl = process.env.WEB_URL || `file://${path.join(__dirname, '../dist/index.html')}}`

  window.maximize()
  window.loadURL(startUrl)

  if (!app.isPackaged) {
    window.webContents.openDevTools()
  }

  return window
}

/**
 *
 * @returns {Electron.CrossProcessExports.BrowserWindow}
 */
function get() {
  return window
}

module.exports = {
  create,
  get,
}
