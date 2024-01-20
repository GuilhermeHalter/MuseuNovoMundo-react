import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from "./routes/Home.jsx"
import Arts from "./routes/Arts.jsx"
import Coins from "./routes/Coins.jsx"
import Esculturas from './routes/Esculturas.jsx'
import Item from "./routes/Item.jsx"
import Search  from './routes/Search.jsx'

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
        path:"/artes",
        element: <Arts />
      },
      {
        path:"/coins",
        element: <Coins />
      },
      {
        path:"/esculturas",
        element: <Esculturas />
      },
      {
        path:"/item:id",
        element: <Item />
      },
      {
        path:"/search",
        element: <Search />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)