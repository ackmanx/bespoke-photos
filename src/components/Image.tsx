import { EyeOutlined } from '@ant-design/icons'

interface Props {
  path: string
}

export const Image = ({ path }: Props) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <div style={{ position: 'relative' }}>
        <img
          style={{
            objectFit: 'cover',
            width: '250px',
            height: '250px',
            margin: '8px',
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
            <EyeOutlined style={{ fontSize: '28px', color: '#bfc1c5', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
