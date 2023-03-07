import Layout from '../../components/layout';
import { IRouterType } from '../../interfaces/router';
import homeRoutes from './home';
import accountRoutes from './account';

const pageRoutes: IRouterType[] = [
  {
    path: '/',
    element: Layout,
    children: [...homeRoutes, ...accountRoutes],
  },
];

export default pageRoutes;
