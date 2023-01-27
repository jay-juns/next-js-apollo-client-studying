import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useDarkMode } from '../utils/customHooks/useDarkMode'
import { GlobalStyles } from '../styles/globalStyles'
import { lightTheme, darkTheme } from '../styles/Theme'
import Navbar from '../component/navbar/Navbar'
import ToggleThemeBtn from '../component/buttons/ToggleThemeBtn'
import '../styles/globals.css'

const client = new ApolloClient<NormalizedCacheObject> ({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  if (!componentMounted) {
    return <div />
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Navbar>
          <ToggleThemeBtn theme={theme} toggleTheme={toggleTheme} />
        </Navbar>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
