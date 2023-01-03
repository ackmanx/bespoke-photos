const promisify = require('util').promisify
const fs = require('fs')
const path = require('path')
const $readdir = promisify(fs.readdir)

async function handleLoadDirectory(event, directoryPath) {
  const files = await $readdir(directoryPath, { withFileTypes: true })

  return files
    .filter((file) => {
      const [extension] = file.name.split('.').slice(-1)

      return file.isFile() && ['jpg', 'jpeg'].includes(extension)
    })
    .map((file) => path.resolve(directoryPath, file.name))
}

module.exports = {
  handleLoadDirectory,
}
