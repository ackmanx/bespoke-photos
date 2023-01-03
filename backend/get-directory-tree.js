const promisify = require('util').promisify
const fs = require('fs')
const path = require('path')
const $readdir = promisify(fs.readdir)

async function getSubDirectories(directoryPath, node) {
  const files = await $readdir(directoryPath, { withFileTypes: true })

  for (const file of files) {
    if (file.isDirectory()) {
      const nextDirectoryPath = path.resolve(directoryPath, file.name)

      const next = await getSubDirectories(nextDirectoryPath, {
        type: 'directory',
        name: file.name,
        path: nextDirectoryPath,
        files: [],
      })

      node.files.push(next)
    }
  }

  return node
}

async function handleGetDirectoryTree(event, path) {
  const folderTree = await getSubDirectories(path, {
    type: 'directory',
    name: path,
    path: path,
    files: [],
  })

  return [folderTree]
}

module.exports = {
  handleGetDirectoryTree,
}
