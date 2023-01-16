const promisify = require('util').promisify
const fs = require('fs')
const path = require('path')
const $readdir = promisify(fs.readdir)
const sizeOf = require('image-size')
const sharp = require('sharp')
const { STORAGE_PATH } = require('./utils')
const Window = require('./electron-browser-window')

async function handleLoadDirectory(event, directoryPath) {
  /** @type {Dirent[]} */
  const files = await $readdir(directoryPath, { withFileTypes: true })

  const fsEntryImages = files.filter((file) => {
    const [extension] = file.name.split('.').slice(-1)

    return file.isFile() && ['jpg', 'jpeg'].includes(extension)
  })

  /** @type {Image[]} */
  const imageObjectsToReturn = []

  for (const i in fsEntryImages) {
    const imageIndexNumber = Number(i)
    const image = fsEntryImages[imageIndexNumber]

    const fullImagePath = path.resolve(directoryPath, image.name)
    const thumbnailPath = `${STORAGE_PATH}/${fullImagePath.replaceAll('/', '|')}`

    const dimensions = sizeOf(fullImagePath)

    const window = Window.get()

    window.webContents.send('loading-progress', {
      current: imageIndexNumber + 1,
      total: fsEntryImages.length,
    })

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
