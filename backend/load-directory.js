const promisify = require('util').promisify
const fs = require('fs')
const path = require('path')
const $readdir = promisify(fs.readdir)
const sizeOf = require('image-size')
const sharp = require('sharp')

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

      sharp(fullImagePath)
        .resize(250, 250)
        .withMetadata()
        .toFile(`${fullImagePath}--output.jpg`, function (err) {
          if (err) {
            console.error(777, 'error with:', image.name)
            console.error(err)
          }
        })

      return {
        src: `bs://${fullImagePath}`,
        pureSrc: fullImagePath,
        thumbSrc: `bs://${fullImagePath}`,
        thumbPureSrc: fullImagePath,
        width: dimensions.width,
        height: dimensions.height,
      }
    })
}

module.exports = {
  handleLoadDirectory,
}
