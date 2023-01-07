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
        type='primary'
        style={{ backgroundColor: Color.selectedBlue, color: Color.fontColor }}
      >
        Delete Forever
      </Button>
    </div>
  )
}
