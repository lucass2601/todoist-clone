import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import App from './App.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'

import Inbox from './pages/Inbox.jsx'
import Today from './pages/Today.jsx'

import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/app' element={<App />}>
          <Route path='inbox' element={<Inbox />} title="Inbox" />
          <Route path='today' element={<Today />} title="Today" />
        </Route>

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
