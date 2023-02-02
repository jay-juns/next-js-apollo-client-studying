import React from 'react'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useDarkMode } from '../utils/customHooks/useDarkMode'
import { GlobalStyles } from '../styles/globalStyles'
import { lightTheme, darkTheme } from '../styles/Theme'
import Navbar from '../component/navbar/Navbar'
import ToggleThemeBtn from '../component/buttons/ToggleThemeBtn'
import Search from '../component/search/Search'
import PageWithLayoutType from '../types/pageWithLayoutType'
import '../styles/globals.css'

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
}

const client = new ApolloClient<NormalizedCacheObject> ({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }: AppLayoutProps) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const Layout = Component.layout || ((children) => <>
  {children}
</>);
  
  if (!componentMounted) {
    return <div />
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Layout>
          <Navbar>
            <Search />
            <ToggleThemeBtn theme={theme} toggleTheme={toggleTheme} />
          </Navbar>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
