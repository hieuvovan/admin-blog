export interface IRouterType {
  path: string;
  element?: any;
  isProtected?: boolean; // default is false,
  redirect?: string;
  children?: IRouterType[];
}
