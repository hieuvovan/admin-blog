import Layout from '../../components/layout';
import { IRouterType } from '../../interfaces/router';
import homeRoutes from './home';

const pageRoutes: IRouterType[] = [
  {
    path: '/',
    element: Layout,
    children: [...homeRoutes],
  },
];

export default pageRoutes;
