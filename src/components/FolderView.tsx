import { PlusOutlined } from '@ant-design/icons'
import { Button, Tooltip, Tree } from 'antd'
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree'
import { EventDataNode } from 'rc-tree/es/interface'
import React, { useEffect, useState } from 'react'

import { Color } from '../theme'

const { DirectoryTree } = Tree

interface Props {
  onDirectorySelect: (node: EventDataNode<DataNode>) => void
}

export const FolderView = ({ onDirectorySelect }: Props) => {
  const [folders, setFolders] = useState<DataNode[]>()

  useEffect(() => {
    Promise.all([
      window.bs.getDirectoryTree('/Users/varr/Desktop/From Uploaded Root'),
      window.bs.getDirectoryTree('/Users/varr/Desktop/many-deep'),
    ]).then((rootFolders) => setFolders(rootFolders.flat()))
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
      <div style={{ display: 'flex', justifyContent: 'right', height: '40px', padding: '8px' }}>
        <Tooltip title='Add new root folder'>
          <Button
            type='ghost'
            shape='circle'
            icon={<PlusOutlined />}
            style={{ color: Color.fontColor }}
            onClick={async () => console.log('file selected', await window.bs.addRootFolder())}
          />
        </Tooltip>
      </div>
      <DirectoryTree
        style={{ backgroundColor: Color.backgroundLight, color: Color.fontColor }}
        onSelect={onSelect}
        treeData={folders}
      />
    </div>
  )
}
