import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navigation from './components/Navigation/Navigation.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ExtraPage from './pages/ExtraPage/ExtraPage.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/extra" element={<ExtraPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
