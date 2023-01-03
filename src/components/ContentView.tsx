import { Image } from 'antd'

interface Props {
  images: string[]
}

export const ContentView = ({ images }: Props) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Image.PreviewGroup>
        {images.map((image) => (
          <Image
            style={{
              objectFit: 'cover',
              width: '250px',
              height: '250px',
              padding: '8px',
            }}
            key={image}
            src={`bs://${image}`}
            width={250}
          />
        ))}
      </Image.PreviewGroup>
    </div>
  )
}
