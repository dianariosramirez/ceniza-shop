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
import { Profile } from './pages/profile';
import { Register } from './pages/register';
import { SignIn } from './pages/signIn';
import { SecureRoute } from './components/SecureRoute/SecureRoute';

//Resources
import { accesorios, paquetes, tizanas } from './resources/productsData';

// Constants
import { REPO_BASE_NAME } from './commons/constants';



const router = createBrowserRouter([
  {
    path: REPO_BASE_NAME,
    element: <ApplicationBar/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "product_tizanas",
        element: <Tizanas productData={tizanas}/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "product_paquetes",
        element: <Paquetes productData={paquetes}/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "product_accesorios",
        element: <Accesorios productData={accesorios}/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "shopping_cart",
        element: <ShoppingCart />,
        errorElement: <ErrorPage />,
      },
      {
        path: "favorites",
        element: <Favorites />,
        errorElement: <ErrorPage />,
      },
      {
        path: "profile",
        element: <SecureRoute>
          <Profile/>
        </SecureRoute>,
        errorElement: <ErrorPage />,
      },
      {
        path: "signin",
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

export default router;
