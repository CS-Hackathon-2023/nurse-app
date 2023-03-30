import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home.component';
import { Login } from './pages/Login/Login.component';
import { SignUp } from './pages/SignUp/SignUp.component';
import { NursePage } from './pages/NursePage/Nurse.component';

export const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/nurse" Component={NursePage} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </Router>
  );
};
