import React, { useState } from 'react'

import { Image } from '../types'
import './App.css'
import { ContentView } from './ContentView'
import { FolderView } from './FolderView'
import { SidebarView } from './SidebarView'

export type ViewMode = 'gallery' | 'rejected'

export const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState<Image[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>('gallery')

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
    <main
      style={{
        display: 'flex',
        transition: 'all 1s linear',
        ...(isLoading && { filter: 'grayscale()' }),
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
  )
}
