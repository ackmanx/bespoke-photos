import React from 'react'

import { Image as iImage } from '../types'
import { Image } from './Image'

interface Props {
  images: iImage[]
  onClick: (index: number) => void
}

export const PhotoAlbum = ({ images, onClick }: Props) => {
  return (
    <div>
      {images.map((image, index) => (
        <Image key={image.src} src={image.src} onClick={() => onClick(index)} />
      ))}
    </div>
  )
}
