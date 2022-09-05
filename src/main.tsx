import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import './index.css'
import '@fontsource/baskervville'
import '@fontsource/roboto'
import { App } from './App'
import MainglobalStyles from './mainGlobalStyles'
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <MainglobalStyles/>
    <App />
  </ThemeProvider>
  </React.StrictMode>
)
