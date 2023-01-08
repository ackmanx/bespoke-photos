const promisify = require('util').promisify
const fs = require('fs')
const $unlink = promisify(fs.unlink)

async function handleDeleteRejected(event, rejectedFiles = []) {
  for (const file of rejectedFiles) {
    try {
      await $unlink(file)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = {
  handleDeleteRejected,
}
