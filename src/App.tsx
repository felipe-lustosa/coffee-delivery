import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { ProductsContextProvider } from './contexts/ProductsContext'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
