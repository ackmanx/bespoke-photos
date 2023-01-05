import React, { useState } from 'react'
import { Lightbox } from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import { Image } from '../types'
import { PhotoAlbum } from './PhotoAlbum'

interface Props {
  images: Image[]
}

function imgSrc(src: string) {
  return `bs://${src}`
}

export const ContentView = ({ images }: Props) => {
  const [index, setIndex] = useState(-1)

  const photos = images.map(({ src, width, height }) => ({ src: imgSrc(src), width, height }))

  const handleViewPhoto = (index: number) => {
    setIndex(index)
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <PhotoAlbum images={photos} onDoubleClick={handleViewPhoto} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails]}
        carousel={{ finite: true }}
        animation={{
          swipe: 200,
        }}
      />
    </div>
  )
}
