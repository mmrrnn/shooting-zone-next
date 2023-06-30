import createCache from '@emotion/cache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from 'mui/themeProvider'
import { AppProps as NextAppProps } from 'next/app'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache
}

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
const clientSideEmotionCache = (() => {
  return createCache({ prepend: true, key: 'css' })
})()

function Application({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default Application
