import { DataNode } from 'antd/es/tree'

/*
 * Expose an API for the UI layer to access the Node backend
 * The API is declared in `backend/preload.js`
 */
export interface BespokeApi {
  // `number` type comes from Antd library, but I'm only ever using `string`
  loadDirectory: (path: string | number) => Promise<string[]>
  getDirectoryTree: (path: string) => Promise<DataNode[]>
}

declare global {
  interface Window {
    bs: BespokeApi
  }
}
