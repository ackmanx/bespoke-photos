import React from 'react'

import './App.css'
import { ContentView } from './ContentView'
import { FolderView } from './FolderView'
import { SidebarView } from './SidebarView'

export const App = () => {
  return (
    <main style={{ display: 'flex' }}>
      <FolderView />
      <ContentView />
      <SidebarView />
    </main>
  )
}
