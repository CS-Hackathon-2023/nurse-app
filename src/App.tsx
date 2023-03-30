/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import './App.css';
import React from 'react';
// import { usePolling } from './hooks/usePolling';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Home } from './pages/Home/Home.component';
// import { Login } from './pages/Login/Login.component';
// import { SignUp } from './pages/SignUp/SignUp.component';
import { AuthProvider } from './Contexts/Auth/Auth.context';
// import { NursePage } from './pages/NursePage/Nurse.component';
import { AppPage } from './pages/App/App.page';

function App (): JSX.Element {
  // const url = 'https://jsonplaceholder.typicode.com/todos/1';
  // const pollingInterval = 15000; // 15 seconds in milliseconds

  // const response = usePolling(url, pollingInterval);
  // if (response == null) {
  //   return <p>Loading...</p>;
  // }

  // if (response.error) {
  //   return <p>Error: {response.error.message}</p>;
  // }

  return (
        <AuthProvider>
            <AppPage />
        </AuthProvider>
  );
}

export default App;
