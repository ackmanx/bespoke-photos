import { DeleteOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

import { Color } from '../../theme'

interface Props {
  rejectedPhotos: string[]
  onShowRejectedViewMode: () => void
}

export const GalleryActionBar = ({ rejectedPhotos, onShowRejectedViewMode }: Props) => {
  return (
    <div
      style={{
        backgroundColor: Color.backgroundLight,
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        padding: '8px',
      }}
    >
      <Tooltip title='Show rejected photos summary'>
        <Button
          type='ghost'
          shape='circle'
          icon={<DeleteOutlined />}
          style={{ color: Color.fontColor }}
          onClick={() => onShowRejectedViewMode()}
        >
          <span>{rejectedPhotos.length}</span>
        </Button>
      </Tooltip>
    </div>
  )
}
