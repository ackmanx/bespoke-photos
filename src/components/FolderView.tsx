import { Tree } from '@geist-ui/react'
import { useEffect, useState } from 'react'

interface File {
  type: 'directory' | 'file'
  name: string
  files?: File[]
}

export const FolderView = () => {
  const [folders, setFolders] = useState<any>()

  useEffect(() => {
    window.bs.getDirectoryTree('/Users/varr/Desktop/many-deep').then((tree) => setFolders(tree))
  }, [])

  return (
    <div style={{ border: '1px solid blue', width: '30%' }}>
      <Tree value={folders} />
    </div>
  )
}
