import { Container } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Components/auth/Auth'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Auth/>} exact />
        <Route path="/home" element={<Home/>} exact />
      </Routes>
    </Container>
   
  </BrowserRouter>
  )
}

export default App