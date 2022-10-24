import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useDarkMode } from '../utils/customHooks/useDarkMode'
import { GlobalStyles } from '../styles/globalStyles'
import { lightTheme, darkTheme } from '../styles/Theme'
import '../styles/globals.css'

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
