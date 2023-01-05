import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import { Lightbox } from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

interface Props {
  images: string[]
}

export const ContentView = ({ images }: Props) => {
  const [index, setIndex] = useState(-1)

  const slides = images.map((image) => ({
    src: `bs://${image}`,
    // width: 3000,
    // height: 3000,
    // srcSet: [
    //   {
    //     src: `bs://${image}`,
    //     width: 3000,
    //     height: 3000,
    //   },
    // ],
  }))

  return (
    <div style={{ flexGrow: 1 }}>
      <PhotoAlbum
        layout='rows'
        photos={images.map((image) => ({ src: `bs://${image}`, width: 200, height: 200 }))}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </div>
  )
}
