import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

import { Color } from '../theme'

interface Props {
  rejectedPhotos: string[]
}

export const RejectedSummaryActionBar = ({ rejectedPhotos }: Props) => {
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
      Summary of Rejected
      <Button
        type='ghost'
        shape='circle'
        icon={<DeleteOutlined />}
        style={{ color: Color.fontColor }}
      />
    </div>
  )
}
