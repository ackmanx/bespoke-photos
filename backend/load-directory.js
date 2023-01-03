const promisify = require('util').promisify
const fs = require('fs')
const $readdir = promisify(fs.readdir)

async function handleLoadDirectory(event, path) {
  const files = await $readdir(path, { withFileTypes: true })

  return files.filter((file) => {
    const extension = file.name.split('.').slice(-1)[0]

    return file.isFile() && ['jpg', 'jpeg'].includes(extension)
  })
}

module.exports = {
  handleLoadDirectory,
}
