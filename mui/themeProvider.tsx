import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'
import type { PropsWithChildren } from 'react'

import { themeOptions } from './theme'

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <MUIThemeProvider theme={themeOptions}>
    <CssBaseline />
    {children}
  </MUIThemeProvider>
)
