import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

import { Color } from '../../theme'

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
          top: '0px',
          right: '0',
          width: '50px',
          height: '50px',
          margin: '8px',
          backgroundColor: Color.backgroundLight,
          borderRadius: '0 10px 0px 10px',
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
              style={{ color: Color.fontColor }}
              onClick={() => onReject()}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
