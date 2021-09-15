import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from '../src/components/layout'
import ProductProvider from '../src/context/Product'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #eee;
  }
`

const theme = {
  colors: {
    primary: '#FFF600'
  }
}

export default function App ({ Component, pageProps }) {
  return (
    <ProductProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ProductProvider>
  )
}
