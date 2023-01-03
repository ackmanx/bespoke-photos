import { CssBaseline, GeistProvider } from '@geist-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <GeistProvider>
    <CssBaseline />
    <App />
  </GeistProvider>
)
