import * as React from 'react'

import { NewsStateContext } from '../context/newsContext'
import type { State } from '../types'

const useNewsState = (): {
  state: State;
} => {
  const context = React.useContext(NewsStateContext)

  if (context === undefined) {
    throw new Error('Something is wrong')
  }

  return context
}

export default useNewsState
