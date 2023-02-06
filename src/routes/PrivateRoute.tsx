import React from 'react';
import { Navigate } from 'react-router';
import { AuthStorageService } from '../services/authStorageService';

const authStorageService = new AuthStorageService();

function isAuthenticated(): boolean {
  const token = authStorageService.token;
  return token ? true : false;
}

export function privateRoute(Wrapped: any) {
  return (props: any) =>
    isAuthenticated() ? <Wrapped {...props} /> : <Navigate to="/auth/login" />;
}
