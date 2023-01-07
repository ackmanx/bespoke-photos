import React from 'react'

import { Color } from '../theme'

interface Props {
  rejectedPhotos: string[]
}

export const RejectedSummaryViewMode = ({ rejectedPhotos }: Props) => {
  return (
    <div style={{ padding: '8px 16px 0 16px' }}>
      <div style={{ overflow: 'scroll', height: 'calc(100vh - 8px)' }}>
        <h2 style={{ fontSize: '18px' }}>Summary of Rejected</h2>
        {rejectedPhotos.map((src) => {
          const b = src.split('/')

          return (
            <div
              style={{
                display: 'flex',
                width: '500px',
                backgroundColor: Color.backgroundLight,
                borderRadius: '10px',
              }}
            >
              <img
                key={src}
                src={`bs://${src}`}
                style={{
                  objectFit: 'cover',
                  width: '250px',
                  height: '250px',
                  borderRadius: '10px',
                }}
              />
              <div style={{ padding: '16px' }}>
                <p>{b[b.length - 1]}</p>
                <p>{b.slice(0, -1).join('/')}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
