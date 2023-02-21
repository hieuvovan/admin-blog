import { toast } from 'react-toastify';
import { ILoginData } from './../interfaces/form';
import { ApiService } from './api-service';
import { AuthStorageService } from './authStorageService';

const apiService = new ApiService();
const authStorageService = new AuthStorageService();

const authService = {
  login: async (body: ILoginData) => {
    try {
      const res: any = await apiService.post(['auth', 'login'], body);
      return res.data;
    } catch (error: any) {
      console.log('Error message:', error);
      toast.error(error.data.message);
    }
  },
  logout: (callback?: () => void) => {
    authStorageService.destroy();
    callback && callback();
  },
  getMe: async () => {
    try {
      const data = await apiService.get(['user', 'me']);
      return data;
    } catch (error: any) {
      console.log('Error message:', error);
      toast.error(error.data.message);
    }
  },
};

export default authService;
