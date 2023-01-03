import { Image } from 'antd'

interface Props {
  images: string[]
}

export const ContentView = ({ images }: Props) => {
  return (
    <div style={{ flexGrow: 1 }}>
      {images.map((image) => (
        <Image key={image} src={`bs://${image}`} width={250} />
      ))}
    </div>
  )
}
