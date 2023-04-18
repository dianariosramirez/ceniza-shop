import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Pages
import { NavigationPage } from './pages/NavigationPage/NavigationPage';
import { TizanasPage } from './pages/TizanasPage/TizanasPage';
import { PaquetesPage } from './pages/PaquetesPage/paquetes';
import { NotFoundPage } from './pages/NotFundPage/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { AccesoriosPage } from './pages/AccesoriosPage/accesorios';
import { ShoppingCartPage } from './pages/ShoppingCartPage/ShoppingCartPage';
import { Favorites } from './pages/FavoritesPage/favorites'
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SecureRoute } from './components/SecureRoute/SecureRoute';
import { ProductDetailPage } from './pages/ProductDetailPage/ProductDetailPage';

// Constants
import { REPO_BASE_NAME } from './commons/constants';



const router = createBrowserRouter([
  {
    path: REPO_BASE_NAME,
    element: <NavigationPage/>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "product_tizanas",
        element: <TizanasPage/>
      },
      {
        path: "product_tizanas/:productId",
        element: <ProductDetailPage/>
      },
      {
        path: "product_paquetes",
        element: <PaquetesPage/>,
      },
      {
        path: "product_paquetes/:productId",
        element: <ProductDetailPage/>
      },
      {
        path: "product_accesorios",
        element: <AccesoriosPage/>
      },
      {
        path: "product_accesorios/:productId",
        element: <ProductDetailPage/>
      },
      {
        path: "shopping_cart",
        element: <ShoppingCartPage />
      },
      {
        path: "favorites",
        element: <Favorites />
      },
      {
        path: "profile",
        element: (
          <SecureRoute>
            <ProfilePage/>
          </SecureRoute>
        )
      },
      {
        path: "signin",
        element: <SignInPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
]);

export default router;
