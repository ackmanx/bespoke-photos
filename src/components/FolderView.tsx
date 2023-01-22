import { Tree } from 'antd'
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree'
import { EventDataNode } from 'rc-tree/es/interface'
import { useEffect, useState } from 'react'

import { Color } from '../theme'

const { DirectoryTree } = Tree

interface Props {
  onDirectorySelect: (node: EventDataNode<DataNode>) => void
}

export const FolderView = ({ onDirectorySelect }: Props) => {
  const [folders, setFolders] = useState<DataNode[]>()

  useEffect(() => {
    window.bs
      .getDirectoryTree('/Users/varr/Desktop/From Uploaded Root')
      .then((tree) => setFolders(tree))
  }, [])

  const onSelect: DirectoryTreeProps['onSelect'] = async (keys, { node }) => {
    onDirectorySelect(node)
  }

  return (
    <div
      style={{
        minWidth: '300px',
        width: '300px',
        height: 'calc(100vh - 8px)',
        paddingTop: '8px',
        backgroundColor: Color.backgroundLight,
      }}
    >
      <DirectoryTree
        style={{ backgroundColor: Color.backgroundLight, color: Color.fontColor }}
        onSelect={onSelect}
        treeData={folders}
      />
    </div>
  )
}
