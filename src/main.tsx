import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import './index.css'
import '@fontsource/baskervville'
import '@fontsource/roboto'
import { App } from './App'
import theme from '../theme';
import MainglobalStyles from './mainGlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <MainglobalStyles/>
    <App />
  </ThemeProvider>
  </React.StrictMode>
)
