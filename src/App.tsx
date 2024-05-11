import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Container } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="xl">
      <Button variant="contained">
        Hola mundo maricas !!!!!
      </Button>
    </Container>
  )
}

export default App
