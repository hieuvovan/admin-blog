import { lazy } from 'react';
import { IRouterType } from '../interfaces/router';

const Login = lazy(() => import('../pages/login/index'));
const AuthLayout = lazy(() => import('../components/layout/AuthLayout'));

const authRoutes: IRouterType[] = [
  {
    path: '/auth',
    element: AuthLayout,
    children: [
      {
        path: '',
        redirect: 'login',
      },
      {
        path: 'login',
        element: Login,
      },
    ],
  },
];

export default authRoutes;
