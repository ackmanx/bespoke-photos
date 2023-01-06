import React, { useState } from 'react'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import { Image } from '../types'
import { ViewMode } from './App'
import { GalleryViewMode } from './view-modes/GalleryViewMode'

interface Props {
  images: Image[]
  viewMode: ViewMode
  onShowRejectedViewMode: () => void
}

export const ContentView = ({ images, viewMode, onShowRejectedViewMode }: Props) => {
  const [rejectedPhotos, setRejectedPhotos] = useState<string[]>([])

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

  let view

  switch (viewMode) {
    case 'gallery':
      view = (
        <GalleryViewMode
          images={images}
          rejectedPhotos={rejectedPhotos}
          onReject={handleMarkPhotoAsRejected}
          onShowRejectedViewMode={onShowRejectedViewMode}
        />
      )
      break
    case 'rejected':
      view = <h1>hello world</h1>
  }

  return <div style={{ flexGrow: 1 }}>{view}</div>
}
