import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Login from './pages/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>,
)
