import React, { useState } from 'react'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import { Image } from '../types'
import { GalleryViewMode } from './view-modes/GalleryViewMode'

interface Props {
  images: Image[]
}

export type ViewMode = 'gallery' | 'rejected'

export const ContentView = ({ images }: Props) => {
  const [rejectedPhotos, setRejectedPhotos] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>('gallery')

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

  const handleShowRejectedViewMode = () => setViewMode('rejected')

  let view

  switch (viewMode) {
    case 'gallery':
      view = (
        <GalleryViewMode
          images={images}
          rejectedPhotos={rejectedPhotos}
          onReject={handleMarkPhotoAsRejected}
          onShowRejectedViewMode={handleShowRejectedViewMode}
        />
      )
      break
    case 'rejected':
      view = <h1>hello world</h1>
  }

  return <div style={{ flexGrow: 1 }}>{view}</div>
}
