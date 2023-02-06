import { lazy } from 'react';
import { IRouterType } from '../../interfaces/router';

const Home = lazy(() => import('../home/index'));

const homeRoutes: IRouterType[] = [
  {
    path: '/',
    element: Home,
    isProtected: true,
  },
];

export default homeRoutes;
