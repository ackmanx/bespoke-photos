import { Image } from './Image'

interface Props {
  images: string[]
}

export const ContentView = ({ images }: Props) => {
  return (
    <div style={{ flexGrow: 1 }}>
      {images.map((image) => (
        <Image path={image} />
      ))}
    </div>
  )
}
