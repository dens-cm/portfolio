import { StrictMode } from 'react'
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/toaster"
import Home from '@/pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Toaster/>
      <Home />
    </Provider>
  </StrictMode>
)
