const promisify = require('util').promisify
const fs = require('fs')
const path = require('path')
const $readdir = promisify(fs.readdir)
const sharp = require('sharp')
const { STORAGE_PATH } = require('./utils')
const Window = require('./electron-browser-window')
const debug = require('debug')('bs:load-directory.js')

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
    const thumbnailName = fullImagePath.substring(1).replaceAll('/', '--')
    const thumbnailPath = `${STORAGE_PATH}/${thumbnailName}`

    const window = Window.get()

    window.webContents.send('loading-progress', {
      current: imageIndexNumber + 1,
      total: fsEntryImages.length,
    })

    if (!fs.existsSync(thumbnailPath)) {
      // If a thumbnail doesn't exist in app storage, create one. The UI will point to this in the photo gallery
      // This is async so it'll return before errors are processed but that's fine in this case
      // Also, thumbnail path includes directory, so images that are moved will get new thumbnails
      debug(`Generating thumbnail: ${thumbnailName}`)

      try {
        // IMPORTANT: Using failOn here says to not fail for warnings (default)
        // This allows creation of thumbnails from Samsung phones because they often produce a visible but corrupted image
        await sharp(fullImagePath)
          // await sharp(fullImagePath, { failOn: 'error' })
          .resize(250, 250)
          .withMetadata()
          .jpeg({ quality: 90 })
          .toFile(thumbnailPath)
      } catch (error) {
        debug(`Error: ${thumbnailName}`)
        debug(error)
      }
    }

    imageObjectsToReturn.push({
      src: `bs://${fullImagePath}`,
      pureSrc: fullImagePath,
      thumbSrc: `bs://${thumbnailPath}`,
      thumbPureSrc: `${thumbnailPath}`,
      title: image.name,
    })
  }

  return imageObjectsToReturn
}

module.exports = {
  handleLoadDirectory,
}
