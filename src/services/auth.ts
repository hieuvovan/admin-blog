import { toast } from 'react-toastify';
import { ILoginData } from './../interfaces/form';
import { ApiService } from './api-service';
import { AuthStorageService } from './authStorageService';

const apiService = new ApiService();
const authStorageService = new AuthStorageService();

const authService = {
  login: async (body: ILoginData) => {
    try {
      const res: any = await apiService.post(['user', 'login'], body);
      return res.data;
    } catch (error: any) {
      console.log('Error message:', error);
      toast.error(error.data.message);
    }
  },
  logout: async (callback?: () => void) => {
    try {
      await apiService.post(['user', 'me', 'logout']);
      authStorageService.destroy();
      callback && callback();
    } catch (error: any) {
      console.log('Error message:', error);
      toast.error(error.data.message);
    }
  },
};

export default authService;
