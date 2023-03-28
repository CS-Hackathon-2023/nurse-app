import React from 'react';
import { app } from "../../base";

export function Home (): JSX.Element {
  return (
    <div>
        <h1>Home</h1>
        <button onClick={()=> app.auth().signOut()}>Click me</button>
    </div>
  );
}
