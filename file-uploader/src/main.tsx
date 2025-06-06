import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './Router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter(Router)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
