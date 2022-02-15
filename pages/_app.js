import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Navigation from '../src/components/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
