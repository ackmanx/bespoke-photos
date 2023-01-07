import { DeleteOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

import { Color } from '../theme'

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
          style={{ color: Color.fontColor }}
          onClick={() => onShowRejectedViewMode()}
        />
      </Tooltip>
    </div>
  )
}
