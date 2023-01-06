import { DeleteOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

interface Props {
  rejectedPhotos: string[]
  onShowRejectedViewMode: () => void
}

export const GalleryActionBar = ({ rejectedPhotos, onShowRejectedViewMode }: Props) => {
  return (
    <div
      style={{
        backgroundColor: '#2b2d30',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px',
      }}
    >
      Rejected: {rejectedPhotos.length}
      <Tooltip title='Show rejected photos summary'>
        <Button
          type='ghost'
          shape='circle'
          icon={<DeleteOutlined />}
          style={{ color: '#dfe1e4' }}
          onClick={() => onShowRejectedViewMode()}
        />
      </Tooltip>
    </div>
  )
}
