import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import { Lightbox } from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

import { Image } from '../types'

interface Props {
  images: Image[]
}

function imgSrc(src: string) {
  return `bs://${src}`
}

export const ContentView = ({ images }: Props) => {
  const [index, setIndex] = useState(-1)

  const slides = images.map((image) => ({
    src: imgSrc(image.src),
    // width: 3000,
    // height: 3000,
    // srcSet: [
    //   {
    //     src: imgSrc(image),
    //     width: 3000,
    //     height: 3000,
    //   },
    // ],
  }))

  return (
    <div style={{ flexGrow: 1 }}>
      <PhotoAlbum
        layout='rows'
        photos={images.map((image) => ({ src: imgSrc(image.src), width: 200, height: 200 }))}
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
