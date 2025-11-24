import { StrictMode } from 'react'
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import Home from '@/pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Home />
    </Provider>
  </StrictMode>
)
