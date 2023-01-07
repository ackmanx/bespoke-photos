import { UndoOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

import { RejectedSummaryActionBar } from '../action-bars/RejectedSummaryActionBar'
import { Color } from '../theme'

interface Props {
  rejectedPhotos: string[]
  onUnmarkAsRejected: (src: string) => void
}

export const RejectedSummaryViewMode = ({ rejectedPhotos, onUnmarkAsRejected }: Props) => {
  return (
    <div>
      <RejectedSummaryActionBar rejectedPhotos={rejectedPhotos} />

      <div style={{ paddingTop: '8px' }}>
        <div style={{ overflow: 'scroll', height: '94vh', textAlign: 'center' }}>
          {rejectedPhotos.map((src) => {
            const splitSrc = src.split('/')

            return (
              <div
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
