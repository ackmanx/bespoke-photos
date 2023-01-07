import React from 'react'

import { RejectedSummaryActionBar } from '../action-bars/RejectedSummaryActionBar'
import { Color } from '../theme'

interface Props {
  rejectedPhotos: string[]
}

export const RejectedSummaryViewMode = ({ rejectedPhotos }: Props) => {
  return (
    <div style={{}}>
      <RejectedSummaryActionBar rejectedPhotos={rejectedPhotos} />

      <div style={{ overflow: 'scroll', height: '94vh' }}>
        {rejectedPhotos.map((src) => {
          const splitSrc = src.split('/')

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
                <p>{splitSrc[splitSrc.length - 1]}</p>
                <p>{splitSrc.slice(0, -1).join('/')}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
