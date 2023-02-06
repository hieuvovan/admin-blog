import pageRoutes from '../pages/page-routes';
import authRoutes from './authRoutes';
import { IRouterType } from '../interfaces/router';

const appRoutes: IRouterType[] = [...pageRoutes, ...authRoutes];

export default appRoutes;
