import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

interface Props {
  src: string
  onReject: () => void
}

export const ImageActionBar = ({ onReject }: Props) => {
  return (
    <div style={{}}>
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
              onClick={() => onReject()}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
