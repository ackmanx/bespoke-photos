import React from 'react'

import { ActionsView } from './ActionsView'
import './App.css'
import { ContentView } from './ContentView'
import { FolderView } from './FolderView'

export const App = () => {
  return (
    <main style={{ display: 'flex' }}>
      <FolderView />
      <ContentView />
      <ActionsView />
    </main>
  )
}
