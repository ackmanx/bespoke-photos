import React, { useState } from 'react'

import { Image } from '../types'
import { ViewMode } from './App'
import { GalleryViewMode } from './view-modes/Gallery/GalleryViewMode'
import { RejectedSummaryViewMode } from './view-modes/RejectedSummary/RejectedSummaryViewMode'

interface Props {
  images: Image[]
  viewMode: ViewMode
  onShowRejectedViewMode: () => void
  onShowGalleryViewMode: () => void
}

export const ContentView = ({
  images,
  viewMode,
  onShowRejectedViewMode,
  onShowGalleryViewMode,
}: Props) => {
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
          onShowGalleryViewMode={onShowGalleryViewMode}
        />
      )
  }

  return <div style={{ flexGrow: 1 }}>{view}</div>
}
