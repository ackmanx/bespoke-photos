import React from 'react'

import { RejectedSummaryActionBar } from '../action-bars/RejectedSummaryActionBar'
import { Color } from '../theme'

interface Props {
  rejectedPhotos: string[]
}

export const RejectedSummaryViewMode = ({ rejectedPhotos }: Props) => {
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
                  <div style={{ padding: '16px' }}>
                    <p>{splitSrc[splitSrc.length - 1]}</p>
                    <p style={{ fontSize: '12px' }}>{splitSrc.slice(0, -1).join('/')}</p>
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
