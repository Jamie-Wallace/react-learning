import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MarsRoverApplication from './MarsRoverApplication.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MarsRoverApplication />
  </StrictMode>,
)
