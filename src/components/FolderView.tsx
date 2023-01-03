import { Tree } from 'antd'
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree'
import { useEffect, useState } from 'react'

const { DirectoryTree } = Tree

export const FolderView = () => {
  const [folders, setFolders] = useState<DataNode[]>()

  useEffect(() => {
    window.bs.getDirectoryTree('/Users/varr/Desktop/many-deep').then((tree) => setFolders(tree))
  }, [])

  const onSelect: DirectoryTreeProps['onSelect'] = async (keys, { node }) => {
    console.log(777, await window.bs.loadDirectory(node.key))
  }

  return (
    <div style={{ width: '30%' }}>
      <DirectoryTree defaultExpandAll onSelect={onSelect} treeData={folders} />
    </div>
  )
}
