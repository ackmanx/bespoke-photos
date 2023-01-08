import React, { useState } from 'react'
import { Lightbox } from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import { Image as iImage } from '../../../types'
import { GalleryActionBar } from './GalleryActionBar'
import { PhotoGallery } from './PhotoGallery'

interface Props {
  images: iImage[]
  rejectedPhotos: string[]
  onReject: (src: string) => void
  onShowRejectedViewMode: () => void
}

export const GalleryViewMode = ({
  images,
  rejectedPhotos,
  onReject,
  onShowRejectedViewMode,
}: Props) => {
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState(-1)

  const handleViewPhoto = (index: number) => {
    setLightboxPhotoIndex(index)
  }

  return (
    <div>
      <GalleryActionBar
        rejectedPhotos={rejectedPhotos}
        onShowRejectedViewMode={onShowRejectedViewMode}
      />

      <div style={{ textAlign: 'center', paddingTop: '8px' }}>
        <PhotoGallery
          images={images}
          rejectedPhotos={rejectedPhotos}
          onDoubleClick={handleViewPhoto}
          onReject={onReject}
        />
      </div>

      <Lightbox
        slides={images}
        open={lightboxPhotoIndex >= 0}
        index={lightboxPhotoIndex}
        close={() => setLightboxPhotoIndex(-1)}
        plugins={[Fullscreen, Thumbnails]}
        carousel={{ finite: true }}
        animation={{
          swipe: 200,
        }}
      />
    </div>
  )
}
