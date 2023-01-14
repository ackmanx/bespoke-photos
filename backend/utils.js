const { app } = require('electron')

module.exports = {
  STORAGE_PATH: `${app.getPath('home')}/.bespoke`,
}
