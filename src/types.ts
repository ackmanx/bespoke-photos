import { DataNode } from 'antd/es/tree'

/*
 * Expose an API for the UI layer to access the Node backend
 * The API is declared in `backend/preload.js`
 */
export interface BespokeApi {
  // `number` type comes from Antd library, but I'm only ever using `string`
  loadDirectory: (path: string | number) => Promise<Image[]>
  getDirectoryTree: (path: string) => Promise<DataNode[]>
}

declare global {
  interface Window {
    bs: BespokeApi
  }
}

/*
 * Models
 */
export interface Image {
  // This is in the format of bs://<absolute_path_here>
  src: string
  // This is in the format of a regular absolute path
  pureSrc: string
  width: number
  height: number
}
