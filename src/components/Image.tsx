import { EyeOutlined } from '@ant-design/icons'
import { useState } from 'react'

interface Props {
  path: string
}

export const Image = ({ path }: Props) => {
  const [showPreview, setShowPreview] = useState(false)

  const handlePreview = (shouldShow: boolean) => {
    setShowPreview(shouldShow)
  }

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <img
        style={{
          objectFit: 'cover',
          width: '250px',
          height: '250px',
          margin: '8px',
          cursor: 'pointer',
        }}
        src={`bs://${path}`}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: '250px',
          height: '50px',
          margin: '8px',
          backgroundColor: 'rgba(0, 0, 0, .65)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            paddingTop: '8px',
            paddingRight: '8px',
          }}
        >
          <EyeOutlined
            style={{ fontSize: '28px', color: '#bfc1c5' }}
            onClick={() => handlePreview(!showPreview)}
          />
        </div>
      </div>

      {showPreview && <img src={`bs://${path}`} />}
    </div>
  )
}
