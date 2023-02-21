import React, { Suspense, useEffect, useState } from 'react';
import './App.css';

import { RouterOutlet } from './routes/RouterOutlet';
import { BrowserRouter as Router } from 'react-router-dom';
import appRoutes from './routes/appRoutes';

import { hot } from 'react-hot-loader/root';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthStorageService } from './services/authStorageService';

import { useDispatch } from 'react-redux';
import { getMeAction } from './reducers/authSlice';

const authStorageService = new AuthStorageService();
const token = authStorageService.token;

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (token) dispatch(getMeAction());
  }, [token]);

  return (
    <>
      <ToastContainer />
      <Router>
        <Suspense fallback={<div>... Loading</div>}>
          <RouterOutlet routes={appRoutes} />
        </Suspense>
      </Router>
    </>
  );
}

export default hot(App);
