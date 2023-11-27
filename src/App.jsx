import { useState } from 'react';
import './App.css';

import { Link, Outlet, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import Mens_outwear from './components/Mens_outwear.jsx';
import Ladies_outwear from './components/Ladies_outwear.jsx'
import Mens_tshirt from './components/Mens_tshirt.jsx';
import Ladies_tshirt from './components/Ladies_tshirt.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Mens_outwear/>
      },
      {
        path:"/Ladies_outwear",
        element:<Ladies_outwear/>
      },
      {
        path:"/Mens_tshirt",
        element:<Mens_tshirt/>
      },
      {
        path:"/Ladies_tshirt",
        element:<Ladies_tshirt/>
      },
      {
       path:'/shopping_cart',
       element:<ShoppingCart/>
      }

    ]
  }
])
const MainApp = () => <RouterProvider router={appRouter} />;
export default MainApp;
