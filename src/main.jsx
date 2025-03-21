import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './theme/index'
import App from './pages/App'

createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={Theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>
)
