import { DataNode } from 'antd/es/tree'

// These are defined in `preload.js`
export interface BespokeApi {
  //todo majerus: add this back and have it return list of photos or videos
  loadDirectory: (path: string) => Promise<any>
  // `number` type comes from Antd library, but I'm only ever using `string`
  getDirectoryTree: (path: string | number) => Promise<DataNode[]>
}

declare global {
  interface Window {
    bs: BespokeApi
  }
}
