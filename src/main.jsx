import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import First from './page/signup'
import Profile from './page/profile.jsx'
import Purpose from './page/pupose.jsx'
import Email from './page/email.jsx'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <First />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      },
      {
        path: '/purpose/:id',
        element: <Purpose />
      },
      {
        path: '/email',
        element: <Email />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
