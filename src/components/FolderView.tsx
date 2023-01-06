import { Tree } from 'antd'
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree'
import { EventDataNode } from 'rc-tree/es/interface'
import { useEffect, useState } from 'react'

const { DirectoryTree } = Tree

interface Props {
  onDirectorySelect: (node: EventDataNode<DataNode>) => void
}

export const FolderView = ({ onDirectorySelect }: Props) => {
  const [folders, setFolders] = useState<DataNode[]>()

  useEffect(() => {
    window.bs.getDirectoryTree('/Users/varr/Desktop/many-deep').then((tree) => setFolders(tree))
  }, [])

  const onSelect: DirectoryTreeProps['onSelect'] = async (keys, { node }) => {
    onDirectorySelect(node)
  }

  return (
    <div
      style={{
        minWidth: '300px',
        height: 'calc(100vh - 8px)',
        paddingTop: '8px',
        backgroundColor: '#2b2d30',
      }}
    >
      <DirectoryTree
        style={{ backgroundColor: '#2b2d30', color: '#dfe1e4' }}
        onSelect={onSelect}
        treeData={folders}
      />
    </div>
  )
}
