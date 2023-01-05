import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

interface Props {
  src: string
  onDoubleClick: () => void
}

export const Image = ({ src, onDoubleClick }: Props) => {
  const handleSingleClick = (event: any) => {
    if (event.detail > 1) return

    console.log(777, 'clicked:', event.detail)
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <div style={{ position: 'relative' }}>
        <img
          style={{
            objectFit: 'cover',
            width: '250px',
            height: '250px',
            margin: '8px',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
          src={src}
          onClick={handleSingleClick}
          onDoubleClick={onDoubleClick}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: '250px',
            height: '50px',
            margin: '8px',
            backgroundColor: '#496da4',
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
              height: '100%',
              paddingRight: '8px',
            }}
          >
            <Tooltip title='Reject'>
              <Button
                type='ghost'
                shape='circle'
                icon={<CloseCircleOutlined />}
                style={{ color: '#dfe1e4' }}
                onClick={() => console.log(777, 'REJECTED!!!!')}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
