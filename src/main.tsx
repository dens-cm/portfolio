import { StrictMode, lazy, Suspense } from 'react'
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GoogleAnalytics from '@/components/GoogleAnalytics'

// Lazy load route pages to split production bundles!
const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const Admin = lazy(() => import('@/pages/Admin'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <GoogleAnalytics />
      <Toaster/>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
