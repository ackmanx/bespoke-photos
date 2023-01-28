import { DeleteOutlined, EditFilled, EditOutlined, PlusOutlined } from '@ant-design/icons'
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
  const [viewMode, setViewMode] = useState<'display' | 'edit'>('display')

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

  const handleEditRootFolders = () =>
    setViewMode((prevState) => (prevState === 'display' ? 'edit' : 'display'))

  const handleAddRootFolder = async () => {
    const { filePaths } = await window.bs.addRootFolder()
    const selectedFolder = filePaths[0]

    if (!selectedFolder) return

    const existingFolders = await window.bs.get('rootFolders')

    window.bs.set('rootFolders', [...existingFolders, selectedFolder])
    window.location.reload()
  }

  const handleDeleteRootFolder = async (folderToDelete: string) => {
    folderToDelete = folderToDelete.replace('NOT-FOUND ', '')

    const existingFolders: string[] = await window.bs.get('rootFolders')
    const newListRootFolders = existingFolders.filter((folder) => folder !== folderToDelete)

    window.bs.set('rootFolders', newListRootFolders)
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
        <Tooltip title='Edit root folders list'>
          <Button
            type='ghost'
            shape='circle'
            icon={viewMode === 'display' ? <EditOutlined /> : <EditFilled />}
            style={{ color: Color.fontColor }}
            onClick={handleEditRootFolders}
          />
        </Tooltip>
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
      {viewMode === 'display' ? (
        // Display mode
        <DirectoryTree
          style={{ backgroundColor: Color.backgroundLight, color: Color.fontColor }}
          onSelect={onSelect}
          treeData={rootFolders}
        />
      ) : (
        // Edit mode
        rootFolders?.map((folder) => (
          <div>
            <Button
              type='ghost'
              shape='circle'
              icon={<DeleteOutlined />}
              style={{ color: Color.fontColor }}
              onClick={() => handleDeleteRootFolder(`${folder.title}`)}
            />
            <>{folder.title}</>
          </div>
        ))
      )}
    </div>
  )
}
