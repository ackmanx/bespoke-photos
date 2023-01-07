import { Typography } from 'antd'
import React from 'react'

import { Color } from '../theme'

const { Title } = Typography

interface Props {
  rejectedPhotos: string[]
}

export const RejectedSummaryViewMode = ({ rejectedPhotos }: Props) => {
  return (
    <div style={{ padding: '8px 16px 0 16px' }}>
      <div style={{ overflow: 'scroll', height: 'calc(100vh - 8px)' }}>
        <Title level={3} style={{ color: Color.fontColor }}>
          Summary of Rejected
        </Title>
        {rejectedPhotos.map((src) => (
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
              <Title level={5}>Location:</Title>
              {src}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
