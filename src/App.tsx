import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NewsProvider } from './context/newsContext'
import { AppRouter } from './routes'

export const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
    <NewsProvider>
        <AppRouter/>
    </NewsProvider>
    </QueryClientProvider>  
  )
}
