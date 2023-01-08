import React, { useState } from 'react'

import { Image } from '../types'
import './App.css'
import { ContentView } from './ContentView'
import { FolderView } from './FolderView'
import { SidebarView } from './SidebarView'

export type ViewMode = 'gallery' | 'rejected'

export const App = () => {
  const [images, setImages] = useState<Image[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>('gallery')

  const handleShowRejectedViewMode = () => setViewMode('rejected')

  const handleShowGalleryViewMode = () => setViewMode('gallery')

  const handleDirectorySelect = async (directoryNode: any) => {
    setViewMode('gallery')
    setImages(await window.bs.loadDirectory(directoryNode.key))
  }

  return (
    <main style={{ display: 'flex' }}>
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
