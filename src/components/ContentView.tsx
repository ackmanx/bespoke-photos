import { DeleteOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React, { useState } from 'react'
import { Lightbox } from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import { Image } from '../types'
import { PhotoAlbum } from './PhotoAlbum'

interface Props {
  images: Image[]
}

function imgSrc(src: string) {
  return `bs://${src}`
}

export const ContentView = ({ images }: Props) => {
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState(-1)

  const photos = images.map(({ src, width, height }) => ({ src: imgSrc(src), width, height }))

  const handleViewPhoto = (index: number) => {
    setLightboxPhotoIndex(index)
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
        Rejected: n
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
      <PhotoAlbum images={photos} onDoubleClick={handleViewPhoto} />

      <Lightbox
        slides={photos}
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
