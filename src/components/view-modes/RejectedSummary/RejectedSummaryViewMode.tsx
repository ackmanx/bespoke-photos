import { UndoOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

import { Color } from '../../theme'
import { RejectedSummaryActionBar } from './RejectedSummaryActionBar'

interface Props {
  rejectedPhotos: string[]
  onUnmarkAsRejected: (src: string) => void
  onClearRejectedPhotosList: () => void
  onShowGalleryViewMode: () => void
}

export const RejectedSummaryViewMode = ({
  rejectedPhotos,
  onUnmarkAsRejected,
  onClearRejectedPhotosList,
  onShowGalleryViewMode,
}: Props) => {
  return (
    <div>
      <RejectedSummaryActionBar
        rejectedPhotos={rejectedPhotos}
        onClearRejectedPhotosList={onClearRejectedPhotosList}
        onShowGalleryViewMode={onShowGalleryViewMode}
      />

      <div style={{ paddingTop: '8px' }}>
        <div style={{ overflow: 'scroll', height: '94vh', textAlign: 'center' }}>
          {rejectedPhotos.map((src) => {
            const splitSrc = src.split('/')

            return (
              <div
                key={src}
                style={{
                  display: 'inline-block',
                  width: '500px',
                  backgroundColor: Color.backgroundLight,
                  borderRadius: '10px',
                  textAlign: 'left',
                  margin: '8px',
                }}
              >
                <div
                  key={src}
                  style={{
                    display: 'flex',
                  }}
                >
                  <img
                    src={`bs://${src}`}
                    style={{
                      objectFit: 'cover',
                      width: '250px',
                      height: '250px',
                      borderRadius: '10px',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '16px',
                      width: '100%',
                    }}
                  >
                    <div>
                      <p>{splitSrc[splitSrc.length - 1]}</p>
                      <p style={{ fontSize: '12px' }}>{splitSrc.slice(0, -1).join('/')}</p>
                    </div>
                    <div style={{ width: '100%', textAlign: 'right' }}>
                      <Tooltip title='Unmark as rejected'>
                        <Button
                          type='ghost'
                          shape='circle'
                          icon={<UndoOutlined />}
                          style={{ color: Color.fontColor }}
                          onClick={() => onUnmarkAsRejected(src)}
                        />
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
