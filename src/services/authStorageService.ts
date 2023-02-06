import cookie from 'js-cookie';
import { COOKIE_STORAGE } from '../constants';
import Cookies from 'js-cookie';

export class AuthStorageService {
  get token(): any {
    return cookie.get(COOKIE_STORAGE.token);
  }

  set token(value: string) {
    if (this.token === value) return;
    cookie.set(COOKIE_STORAGE.token, value);
  }

  destroy() {
    Cookies.remove(COOKIE_STORAGE.token);
  }
}
