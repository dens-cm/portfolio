// import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from '@/pages/App'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Navigate to='/'/>}/>
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
}