import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Error } from '../components/errors/Error';
import { Home } from '../components/Templates/Home/Home';


export const AppRouter = () => {


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={<Error/>}
          />
    </Routes>
    </BrowserRouter>
  )
}
