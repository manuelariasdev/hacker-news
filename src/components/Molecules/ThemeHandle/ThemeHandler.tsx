import React, { useState } from 'react'

import { Icon, IconButton } from '../../Atoms'

export const ThemeHandler = () => {

    const [mode, setMode] = useState(

        window.localStorage.getItem('theme') ?? 'light'

      )
    
      React.useEffect(() => {

        window.localStorage.setItem('theme', mode)
        document.body.dataset.theme = mode
        
      }, [mode])

  return (
    <IconButton
      isData="theme-handler"
      shape="circle"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? <Icon name="moon" /> : <Icon name="sun" />}
    </IconButton>
  )
}
