import React from 'react'

import { Image as iImage } from '../types'
import { Image } from './Image'

interface Props {
  images: iImage[]
  onDoubleClick: (index: number) => void
  onReject: (src: string) => void
}

export const PhotoAlbum = ({ images, onDoubleClick, onReject }: Props) => {
  return (
    <div style={{ overflow: 'scroll', height: '94vh' }}>
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          onDoubleClick={() => onDoubleClick(index)}
          onReject={() => onReject(image.src)}
        />
      ))}
    </div>
  )
}
