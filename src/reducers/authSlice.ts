import { createSlice } from '@reduxjs/toolkit';
import { ILoginData } from '../interfaces/form';
import authService from '../services/auth';
import { AuthStorageService } from '../services/authStorageService';

const authStorageService = new AuthStorageService();

export interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const loginAction =
  (body: ILoginData, callback?: () => void) => async (dispatch: any) => {
    const data = await authService.login(body);

    if (!data) return;

    const { user, accessToken } = data;

    dispatch(setUser(user));
    authStorageService.token = accessToken;

    callback && callback();
  };

export const getMeAction = () => async (dispatch: any) => {
  const data = await authService.getMe();

  dispatch(setUser(data));
};

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
