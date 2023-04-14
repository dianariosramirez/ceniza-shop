import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Pages
import { ApplicationBar } from './pages/navigationBar';
import { TizanasPage } from './pages/TizanasPage/TizanasPage';
import { PaquetesPage } from './pages/PaquetesPage/paquetes';
import { NotFoundPage } from './pages/NotFundPage/NotFoundPage';
import { Home } from './pages/home';
import { AccesoriosPage } from './pages/AccesoriosPage/accesorios';
import { ShoppingCart } from './pages/shoppingCart';
import { Favorites } from './pages/FavoritesPage/favorites'
import { Profile } from './pages/profile';
import { Register } from './pages/register';
import { SignIn } from './pages/signIn';
import { SecureRoute } from './components/SecureRoute/SecureRoute';

// Constants
import { REPO_BASE_NAME } from './commons/constants';
import { Product } from './pages/product';



const router = createBrowserRouter([
  {
    path: REPO_BASE_NAME,
    element: <ApplicationBar/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "product_tizanas",
        element: <TizanasPage/>
      },
      {
        path: "product_tizanas/:productId",
        element: <Product/>
      },
      {
        path: "product_paquetes",
        element: <PaquetesPage/>,
      },
      {
        path: "product_paquetes/:productId",
        element: <Product/>
      },
      {
        path: "product_accesorios",
        element: <AccesoriosPage/>
      },
      {
        path: "product_accesorios/:productId",
        element: <Product/>
      },
      {
        path: "shopping_cart",
        element: <ShoppingCart />
      },
      {
        path: "favorites",
        element: <Favorites />
      },
      {
        path: "profile",
        element: (
          <SecureRoute>
            <Profile/>
          </SecureRoute>
        )
      },
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
]);

export default router;
