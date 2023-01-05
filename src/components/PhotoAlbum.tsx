import React from 'react'

import { Image as iImage } from '../types'
import { Image } from './Image'

interface Props {
  images: iImage[]
  onDoubleClick: (index: number) => void
}

export const PhotoAlbum = ({ images, onDoubleClick }: Props) => {
  return (
    <div>
      {images.map((image, index) => (
        <Image key={image.src} src={image.src} onDoubleClick={() => onDoubleClick(index)} />
      ))}
    </div>
  )
}
