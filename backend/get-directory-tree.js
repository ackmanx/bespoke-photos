const promisify = require('util').promisify
const fs = require('fs')
const path = require('path')
const $readdir = promisify(fs.readdir)
const $exists = promisify(fs.exists)

async function getSubDirectories(directoryPath, node) {
  const files = await $readdir(directoryPath, { withFileTypes: true })

  for (const file of files) {
    if (file.isDirectory()) {
      const nextDirectoryPath = path.resolve(directoryPath, file.name)

      const next = await getSubDirectories(nextDirectoryPath, {
        title: file.name,
        key: nextDirectoryPath,
        children: [],
      })

      node.children.push(next)
    }
  }

  return node
}

async function handleGetDirectoryTree(event, path) {
  if (!(await $exists(path))) {
    return [
      {
        title: `NOT-FOUND ${path}`,
        key: path,
        children: [],
      },
    ]
  }

  const folderTree = await getSubDirectories(path, {
    title: path,
    key: path,
    children: [],
  })

  return [folderTree]
}

module.exports = {
  handleGetDirectoryTree,
}
