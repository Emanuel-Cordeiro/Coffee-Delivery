import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from './context/CartContextProvider'
import { Router } from './routes/routes'

import theme from './theme'

import './App.css'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartContextProvider >
      </ThemeProvider >
    </>
  )
}

export default App
