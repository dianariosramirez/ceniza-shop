import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Pages
import { ApplicationBar } from './pages/navigationBar';
import { Tizanas } from './pages/tizanas';
import { Paquetes } from './pages/paquetes';
import { ErrorPage } from './errorPage';
import { Home } from './pages/home';
import { Accesorios } from './pages/accesorios';
import { ShoppingCart } from './pages/shoppingCart';
import { Favorites } from './pages/favorites'

//Resources
import { accesorios, paquetes, tizanas } from './resources/productsData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationBar/>,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      {
        path: "product_tizanas/",
        element: <Tizanas productData={tizanas}/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "product_paquetes/",
        element: <Paquetes productData={paquetes}/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "product_accesorios/",
        element: <Accesorios productData={accesorios}/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "shopping_cart/",
        element: <ShoppingCart />,
        errorElement: <ErrorPage />,
      },
      {
        path: "favorites/",
        element: <Favorites />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
