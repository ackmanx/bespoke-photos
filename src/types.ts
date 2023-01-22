import { DataNode } from 'antd/es/tree'

/*
 * Expose an API for the UI layer to access the Node backend
 * The API is declared in `backend/preload.js`
 */
export interface BespokeApi {
  get: (key: string) => any
  set: (key: string, value: any) => void
  // `number` type comes from Antd library, but I'm only ever using `string`
  loadDirectory: (path: string | number) => Promise<Image[]>
  getDirectoryTree: (path: string) => Promise<DataNode[]>
  deleteRejected: (rejectedList: string[]) => Promise<any>
  onLoadingProgress: (
    callback: (event: any, progress: { current: number; total: number }) => void
  ) => any
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
  thumbSrc: string
  thumbPureSrc: string
}
