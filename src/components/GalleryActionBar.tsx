import { DeleteOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

interface Props {
  rejectedPhotos: string[]
}

export const GalleryActionBar = ({ rejectedPhotos }: Props) => {
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
      <Tooltip title='Delete all rejected photos'>
        <Button
          type='ghost'
          shape='circle'
          icon={<DeleteOutlined />}
          style={{ color: '#dfe1e4' }}
          onClick={() => console.log(777, 'DELETED!!!!')}
        />
      </Tooltip>
    </div>
  )
}
