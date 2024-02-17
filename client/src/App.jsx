import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Welcome from './pages/welcome/Welcome'
import Bastille from './pages/levels/Level-4'
import Egypt from './pages/levels/Level-2'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Welcome /> },
      // { path: "login", element: <Login /> },
      {
        path: 'levels',
        children: [
          { path: 'level4', element: <Bastille /> },
          { path: 'level2', element: <Egypt></Egypt> },
        ],
      },
    ],
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
