module.exports = {
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
