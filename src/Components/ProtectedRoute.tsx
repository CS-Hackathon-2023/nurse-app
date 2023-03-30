import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/Auth/Auth.context';

export const ProtectedRoute = ({ path, ...props }: any): JSX.Element => {
  const { currentUser } = useContext(AuthContext);
  return currentUser != null ? <Route {...props} path={path} /> : <Navigate to="/login" />;
};
