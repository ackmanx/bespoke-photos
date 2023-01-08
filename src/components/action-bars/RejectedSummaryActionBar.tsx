import { ExclamationCircleTwoTone } from '@ant-design/icons'
import { Button, Modal } from 'antd'
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

  const confirm = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete?',
      icon: <ExclamationCircleTwoTone twoToneColor='#eb2f96' />,
      content: 'You cannot undo this action!',
      okText: 'Delete',
      cancelText: 'Cancel',
      onOk: handleDeleteForever,
    })
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
        disabled={rejectedPhotos.length === 0}
        style={{ backgroundColor: Color.selectedBlue, color: Color.fontColor }}
        onClick={confirm}
      >
        Delete Forever
      </Button>
    </div>
  )
}
