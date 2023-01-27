import React from 'react'

import { Image as iImage } from '../../../types'
import { Image } from './Image'

interface Props {
  images: iImage[]
  rejectedPhotos: string[]
  onDoubleClick: (index: number) => void
  onReject: (src: string) => void
}

export const PhotoGallery = ({ images = [], rejectedPhotos, onDoubleClick, onReject }: Props) => {
  return (
    <div style={{ overflow: 'scroll', height: '94vh' }}>
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.thumbSrc}
          isRejected={rejectedPhotos.includes(image.pureSrc)}
          onDoubleClick={() => onDoubleClick(index)}
          onReject={() => onReject(image.pureSrc)}
        />
      ))}
    </div>
  )
}
