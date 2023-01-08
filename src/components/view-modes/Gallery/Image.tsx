import { ImageActionBar } from './ImageActionBar'

interface Props {
  src: string
  isRejected: boolean
  onDoubleClick: () => void
  onReject: () => void
}

export const Image = ({ src, isRejected, onDoubleClick, onReject }: Props) => {
  const handleSingleClick = (event: any) => {
    if (event.detail > 1) return

    //todo majerus: Selected photo will go here
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
            boxSizing: 'border-box',
            ...(isRejected && { filter: 'grayscale() brightness(.5)' }),
          }}
          src={src}
          onClick={handleSingleClick}
          onDoubleClick={onDoubleClick}
        />

        {isRejected && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              zIndex: 1,
              width: '250px',
              height: '250px',
              margin: '8px',
              borderRadius: '10px',
              border: '3px solid red',
              boxSizing: 'border-box',
              backgroundColor: 'transparent',
            }}
            onClick={onReject}
          />
        )}

        <ImageActionBar src={src} onReject={onReject} />
      </div>
    </div>
  )
}
