module.exports = {
  hooks: {
    prePackage: async () => {
      // clean directories first
      // make index.html asset imports relative
    },
  },
  packagerConfig: {
    ignore: ['/node_modules/.cache', '/node_modules/.vite'],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO',
      },
    },
  ],
}
