import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from '@pages/Home'

export default function App() {
  return (
    <div className='h-dvh w-dvw overflow-auto bg-white'>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}
