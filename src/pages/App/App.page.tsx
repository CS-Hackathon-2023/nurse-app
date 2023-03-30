import React from 'react';
import { AppBar } from '../../Components/AppBar/AppBar.component';
import { AppRouter } from '../../App.router';

export const AppPage = (): JSX.Element => {
  return (
    <>
      <AppBar />
      <div>
        <AppRouter />
      </div>
    </>
  );
};
