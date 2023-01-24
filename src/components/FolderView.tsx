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
  const [rootFolders, setRootFolders] = useState<DataNode[]>()

  useEffect(() => {
    async function doit() {
      const rootFolders = await window.bs.get('rootFolders')

      const trees = await Promise.all(
        rootFolders.map((directory: string) => window.bs.getDirectoryTree(directory))
      )

      setRootFolders(trees.flat())
    }

    doit()
  }, [])

  const onSelect: DirectoryTreeProps['onSelect'] = async (keys, { node }) => {
    onDirectorySelect(node)
  }

  const handleAddRootFolder = async () => {
    const { filePaths } = await window.bs.addRootFolder()
    const selectedFolder = filePaths[0]
    const existingFolders = await window.bs.get('rootFolders')

    window.bs.set('rootFolders', [...existingFolders, selectedFolder])
    window.location.reload()
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
            onClick={handleAddRootFolder}
          />
        </Tooltip>
      </div>
      <DirectoryTree
        style={{ backgroundColor: Color.backgroundLight, color: Color.fontColor }}
        onSelect={onSelect}
        treeData={rootFolders}
      />
    </div>
  )
}
