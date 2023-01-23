import React, { useEffect, useState } from 'react'

import { Image } from '../types'
import './App.css'
import { ContentView } from './ContentView'
import { FolderView } from './FolderView'
import { SidebarView } from './SidebarView'

export type ViewMode = 'gallery' | 'rejected'

interface LoadingProgress {
  current: number
  total: number
}

export const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState<LoadingProgress>()
  const [images, setImages] = useState<Image[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>('gallery')

  useEffect(() => {
    window.bs.onLoadingProgress((_event, progress) => {
      setLoadingProgress(progress)
    })

    window.bs.addRootFolder()
  }, [])

  const handleShowRejectedViewMode = () => setViewMode('rejected')

  const handleShowGalleryViewMode = () => setViewMode('gallery')

  const handleDirectorySelect = async (directoryNode: any) => {
    setViewMode('gallery')
    const timeout = setTimeout(() => setIsLoading(true), 200)

    const images = await window.bs.loadDirectory(directoryNode.key)

    clearTimeout(timeout)

    setIsLoading(false)
    setImages(images)
  }

  return (
    <>
      {isLoading && (
        <div
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '38px',
            padding: '16px 4px',
            position: 'absolute',
            zIndex: -1,
          }}
        >
          loading {loadingProgress?.current} / {loadingProgress?.total}
        </div>
      )}

      <main
        style={{
          display: 'flex',
          transition: 'all .5s linear',
          ...(isLoading && { filter: 'grayscale()', translate: '55px' }),
        }}
      >
        <FolderView onDirectorySelect={handleDirectorySelect} />
        <ContentView
          images={images}
          viewMode={viewMode}
          onShowGalleryViewMode={handleShowGalleryViewMode}
          onShowRejectedViewMode={handleShowRejectedViewMode}
        />
        <SidebarView />
      </main>
    </>
  )
}
