import { Typography } from 'antd'
import React from 'react'

import { Color } from '../theme'

const { Title } = Typography

interface Props {
  rejectedPhotos: string[]
}

export const RejectedSummaryViewMode = ({ rejectedPhotos }: Props) => {
  return (
    <div style={{ paddingTop: '8px' }}>
      <div style={{ overflow: 'scroll', height: 'calc(100vh - 8px)', textAlign: 'center' }}>
        <Title level={3} style={{ color: Color.fontColor }}>
          Summary of Rejected
        </Title>
        {rejectedPhotos.map((src) => (
          <div style={{ width: '500px', backgroundColor: '' }}>
            <img
              key={src}
              src={`bs://${src}`}
              style={{
                objectFit: 'cover',
                width: '250px',
                height: '250px',
                margin: '8px',
                borderRadius: '10px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
