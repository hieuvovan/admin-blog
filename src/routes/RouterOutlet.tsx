import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { privateRoute } from './PrivateRoute';

function renderRoute(routes: any) {
  return routes.map((route: any, index: number) => {
    // Redirect router
    if (route.redirect && !route.element) {
      route.element = () => <Navigate to={route.redirect} />;
    }

    const PrivateRoute = privateRoute(route.element);

    return (
      <Route
        key={index}
        path={route.path}
        element={route.isProtected ? <PrivateRoute /> : <route.element />}
      >
        {route.children && renderRoute(route.children)}
      </Route>
    );
  });
}

export const RouterOutlet = ({ routes }: any) => {
  return (
    <Routes>
      {renderRoute(routes)}
      <Route
        path="*"
        element={<div>Not found</div>}
      />
    </Routes>
  );
};
