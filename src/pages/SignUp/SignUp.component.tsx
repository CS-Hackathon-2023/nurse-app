import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e: any): void => {
    console.log(`email: ${email}, password: ${password}`);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
      console.log('authUser: ');
      console.log(authUser);
    }).catch((error) => {
      console.log('error:');
      console.error(error);
    });
  };

  return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={signUp}>
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
                <button type={'submit'}>Sign Up</button>
            </form>
        </div>
  );
};
