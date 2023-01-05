const promisify = require('util').promisify
const fs = require('fs')
const path = require('path')
const $readdir = promisify(fs.readdir)
const sizeOf = require('image-size')

/**
 * @param event
 * @param directoryPath
 * @returns {Promise<*>} { path: string, width: number, height: number }
 */
async function handleLoadDirectory(event, directoryPath) {
  const files = await $readdir(directoryPath, { withFileTypes: true })

  return files
    .filter((file) => {
      const [extension] = file.name.split('.').slice(-1)

      return file.isFile() && ['jpg', 'jpeg'].includes(extension)
    })
    .map((image) => {
      const fullImagePath = path.resolve(directoryPath, image.name)
      const dimensions = sizeOf(fullImagePath)

      return {
        src: fullImagePath,
        width: dimensions.width,
        height: dimensions.height,
      }
    })
}

module.exports = {
  handleLoadDirectory,
}
