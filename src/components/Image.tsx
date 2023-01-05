import { EyeOutlined } from '@ant-design/icons'

interface Props {
  src: string
  onClick: () => void
}

export const Image = ({ src, onClick }: Props) => {
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
          src={src}
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
              style={{ fontSize: '28px', color: '#bfc1c5', cursor: 'pointer' }}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
