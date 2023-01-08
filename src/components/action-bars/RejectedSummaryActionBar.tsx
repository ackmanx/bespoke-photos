import { Button } from 'antd'
import React from 'react'

import { Color } from '../theme'

interface Props {
  rejectedPhotos: string[]
  onClearRejectedPhotosList: () => void
}

export const RejectedSummaryActionBar = ({ rejectedPhotos, onClearRejectedPhotosList }: Props) => {
  const handleDeleteForever = async () => {
    await window.bs.deleteRejected(rejectedPhotos)
    onClearRejectedPhotosList()
  }

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
        onClick={handleDeleteForever}
      >
        Delete Forever
      </Button>
    </div>
  )
}
