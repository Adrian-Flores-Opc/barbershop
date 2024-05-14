import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Container } from '@mui/material'
import { NavBar } from './common/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import { NotificationProvider } from './context/notification.context'

function App() {
  return (
    // <div>
    //   <NavBar />
    //   <Container sx={{ mt:9 }} maxWidth="xl">
    //     <Button variant="contained">
    //       Hola mundo maricas !!!!!
    //     </Button>
    //   </Container>
    // </div>
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  )
}

export default App
