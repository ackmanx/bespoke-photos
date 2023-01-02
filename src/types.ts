// These are defined in `preload.js`
export interface BespokeApi {
  loadDirectory: (path: string) => Promise<any>
  getDirectoryTree: (path: string) => Promise<File[]>
}

declare global {
  interface Window {
    bs: BespokeApi
  }
}
