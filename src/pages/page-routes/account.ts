import { lazy } from 'react';
import { IRouterType } from '../../interfaces/router';

const Account = lazy(() => import('../account/index'));

const accountRoutes: IRouterType[] = [
  {
    path: '/account',
    element: Account,
    isProtected: true,
  },
];

export default accountRoutes;
