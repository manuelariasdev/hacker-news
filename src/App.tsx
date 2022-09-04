import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error } from './components/errors/Error'
import { Home } from './components/Templates/Home/Home'
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
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={<Error/>}
          />
        </Routes>
      </BrowserRouter>
    
      </QueryClientProvider>  
  )
}
