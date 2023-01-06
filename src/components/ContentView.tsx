import { DeleteOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React, { useState } from 'react'
import { Lightbox } from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import { Image } from '../types'
import { PhotoGallery } from './PhotoGallery'

interface Props {
  images: Image[]
}

export const ContentView = ({ images }: Props) => {
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState(-1)
  const [rejectedPhotos, setRejectedPhotos] = useState<string[]>([])

  const handleViewPhoto = (index: number) => {
    setLightboxPhotoIndex(index)
  }

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
      <div
        style={{
          backgroundColor: '#2b2d30',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px',
        }}
      >
        Rejected: {rejectedPhotos.length}
        <Tooltip title='Delete all rejected photos'>
          <Button
            type='ghost'
            shape='circle'
            icon={<DeleteOutlined />}
            style={{ color: '#dfe1e4' }}
            onClick={() => console.log(777, 'DELETED!!!!')}
          />
        </Tooltip>
      </div>
      <div style={{ textAlign: 'center', paddingTop: '8px' }}>
        <PhotoGallery
          images={images}
          rejectedPhotos={rejectedPhotos}
          onDoubleClick={handleViewPhoto}
          onReject={handleMarkPhotoAsRejected}
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
