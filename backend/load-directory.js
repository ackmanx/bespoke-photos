const promisify = require('util').promisify
const fs = require('fs')
const path = require('path')
const $readdir = promisify(fs.readdir)
const sizeOf = require('image-size')
const sharp = require('sharp')
const { STORAGE_PATH } = require('./utils')

async function handleLoadDirectory(event, directoryPath) {
  // Returns `FileSystemEntry` not `string[]`
  const files = await $readdir(directoryPath, { withFileTypes: true })

  const fsEntryImages = files.filter((file) => {
    const [extension] = file.name.split('.').slice(-1)

    return file.isFile() && ['jpg', 'jpeg'].includes(extension)
  })

  const imageObjectsToReturn = []

  for (const image of fsEntryImages) {
    const fullImagePath = path.resolve(directoryPath, image.name)
    const thumbnailPath = `${STORAGE_PATH}/${fullImagePath.replaceAll('/', '|')}`

    const dimensions = sizeOf(fullImagePath)

    if (!fs.existsSync(thumbnailPath)) {
      // If a thumbnail doesn't exist in app storage, create one. The UI will point to this in the photo gallery
      // This is async so it'll return before errors are processed but that's fine in this case
      // Also, thumbnail path includes directory, so images that are moved will get new thumbnails
      await sharp(fullImagePath).resize(250, 250).withMetadata().toFile(`${thumbnailPath}`)
    }

    imageObjectsToReturn.push({
      src: `bs://${fullImagePath}`,
      pureSrc: fullImagePath,
      thumbSrc: `bs://${thumbnailPath}`,
      thumbPureSrc: `${thumbnailPath}`,
      width: dimensions.width,
      height: dimensions.height,
    })
  }

  return imageObjectsToReturn
}

module.exports = {
  handleLoadDirectory,
}
