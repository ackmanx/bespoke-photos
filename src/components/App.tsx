import React, { useState } from 'react'

import { Image } from '../types'
import './App.css'
import { ContentView } from './ContentView'
import { FolderView } from './FolderView'
import { SidebarView } from './SidebarView'

export const App = () => {
  const [images, setImages] = useState<Image[]>([])

  const handleDirectorySelect = async (directoryNode: any) => {
    setImages(await window.bs.loadDirectory(directoryNode.key))
  }

  return (
    <main style={{ display: 'flex' }}>
      <FolderView onDirectorySelect={handleDirectorySelect} />
      <ContentView images={images} />
      <SidebarView />
    </main>
  )
}
