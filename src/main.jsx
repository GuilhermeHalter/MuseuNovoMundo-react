import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from "./routes/Home.jsx"
import Arts from "./routes/Arts.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/page",
        element: <Arts />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)