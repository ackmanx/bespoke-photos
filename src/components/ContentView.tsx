import React, { useState } from 'react'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import { Image } from '../types'
import { ViewMode } from './App'
import { GalleryViewMode } from './view-modes/GalleryViewMode'
import { RejectedSummaryViewMode } from './view-modes/RejectedSummaryViewMode'

interface Props {
  images: Image[]
  viewMode: ViewMode
  onShowRejectedViewMode: () => void
}

export const ContentView = ({ images, viewMode, onShowRejectedViewMode }: Props) => {
  const [rejectedPhotos, setRejectedPhotos] = useState<string[]>([])

  const handleTogglePhotoAsRejected = (src: string) => {
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

  const handleClearRejectedPhotosList = () => setRejectedPhotos([])

  let view

  switch (viewMode) {
    case 'gallery':
      view = (
        <GalleryViewMode
          images={images}
          rejectedPhotos={rejectedPhotos}
          onReject={handleTogglePhotoAsRejected}
          onShowRejectedViewMode={onShowRejectedViewMode}
        />
      )
      break
    case 'rejected':
      view = (
        <RejectedSummaryViewMode
          rejectedPhotos={rejectedPhotos}
          onUnmarkAsRejected={handleTogglePhotoAsRejected}
          onClearRejectedPhotosList={handleClearRejectedPhotosList}
        />
      )
  }

  return <div style={{ flexGrow: 1 }}>{view}</div>
}
