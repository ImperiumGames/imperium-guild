// import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { withHydrate } from 'effector-next'
import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { useStore } from 'effector-react'
import { CssBaseline, useMediaQuery } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { useLocalStorage } from 'hooks'
import { $theme, setTheme } from 'models/gui'
import { dark, light } from 'theme'
import { Content, LeftMenu, TopAppBar } from 'components'
import { createEmotionCache } from 'utils'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const enhance = withHydrate()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const theme = useStore($theme)
  const isSystemDark = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDark, setIsDark] = useLocalStorage<boolean>('dark')
  useEffect(() => {
    const timeout = setTimeout(() => {
      isDark === undefined && setIsDark(isSystemDark)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [isDark, isSystemDark, setIsDark])

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Imperium</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <CssBaseline />
        <TopAppBar />
        <LeftMenu />
        <Content>
          <Component {...pageProps} />
        </Content>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default enhance(MyApp)
