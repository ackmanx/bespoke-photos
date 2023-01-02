function handleGetDirectoryTree(event, path) {
  return [
    {
      type: 'directory',
      name: path,
      files: [
        {
          type: 'file',
          name: 'cs.js',
        },
      ],
    },
  ]
}

module.exports = {
  handleGetDirectoryTree,
}
