import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import Adminpanel from './pages/Adminpanel.jsx'
import Italok from './pages/Italok.jsx'
import Ételek from './pages/Ételek.jsx'
import Desszertek from './pages/Desszertek.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='admin' element={<Admin />}/>
        <Route path='adminpanel' element={<Adminpanel />}/>
        <Route path='etelek' element={<Ételek/>}/>
        <Route path='italok' element={<Italok/>}/>
        <Route path='desszertek' element={<Desszertek/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
