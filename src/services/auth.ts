import { ILoginData } from './../interfaces/form';
import { ApiService } from './api-service';

const apiService = new ApiService();

const authService = {
  login: async (body: ILoginData) => {
    try {
      const res = await apiService.post(['user', 'login'], body);

      console.log('res', res);
    } catch (error) {
      console.log('Error message:', error);
    }
  },
};

export default authService;
