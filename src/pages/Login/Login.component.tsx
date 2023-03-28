import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../base';

export const Login = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e: any): void => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    }
    );
  };

  return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input
                    type={'email'}
                    placeholder={'Email'}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }} />
                <input
                    type={'password'}
                    placeholder={'Password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); }} />
                <button type={'submit'}>Login</button>
            </form>
        </div>
  );
};
