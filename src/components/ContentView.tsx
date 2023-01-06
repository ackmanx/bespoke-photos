import React, { useState } from 'react'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import { Image } from '../types'
import { GalleryViewMode } from './view-modes/GalleryViewMode'

interface Props {
  images: Image[]
}

export const ContentView = ({ images }: Props) => {
  const [rejectedPhotos, setRejectedPhotos] = useState<string[]>([])
  // const [viewMode, setViewMode] = useState<'gallery' | 'rejected' | 'lightbox'>('gallery')

  const handleMarkPhotoAsRejected = (src: string) => {
    if (rejectedPhotos.includes(src)) {
      setRejectedPhotos((prev) => {
        const newRejectedPhotos = [...prev]
        newRejectedPhotos.splice(prev.indexOf(src), 1)
        return newRejectedPhotos
      })
    } else {
      setRejectedPhotos((prev) => [...prev, src])
    }
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <GalleryViewMode
        images={images}
        rejectedPhotos={rejectedPhotos}
        onReject={handleMarkPhotoAsRejected}
      />
    </div>
  )
}
