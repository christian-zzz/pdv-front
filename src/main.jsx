import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router'

import { AuthProvider } from './context/AuthContext'
import { IconContext } from '@phosphor-icons/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <IconContext.Provider
        value={{
          color: "currentColor",
          size: "1.25em",
          weight: "duotone",
          mirrored: false,
        }}
      >
        <RouterProvider router={router} />
      </IconContext.Provider>
    </AuthProvider>
  </StrictMode>,
)
