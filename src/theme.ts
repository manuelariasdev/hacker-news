
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: {
    sm: '3px',
    md: '6px',
    lg: '15px',
    xl: '50px'
  },
  boxShadow: {
    sm: ' 0 1px 4px 0 rgba(0, 21, 41, 0.12)'
  },
  fontSize: {
    xs: '0.68rem', 
    sm: '0.875rem', 
    md: '16px',
    lg: '1.25rem', 
    xl: '1.75rem'
  },
  letterSpacing: {
    md: 0.25
  },
  lineHeight: {
    xs: '1rem',
    sm: '1.25rem',
    md: '16px',
    lg: '1.25rem',
    xl: '1.75rem'
  },
  transition: 'all 700ms cubic-bezier(0.15, 1, 0.20, 1)'
}

export default theme
