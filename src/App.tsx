import React, { Suspense } from 'react';
import './App.css';

import { RouterOutlet } from './routes/RouterOutlet';
import { BrowserRouter as Router } from 'react-router-dom';
import appRoutes from './routes/appRoutes';

import { hot } from 'react-hot-loader/root';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
