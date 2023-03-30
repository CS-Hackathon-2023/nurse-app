import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';

interface AuthContextType {
  currentUser: User | null
}

const initValue: AuthContextType = {
  currentUser: null
};

export const AuthContext = createContext<AuthContextType>(initValue);

export const AuthProvider: any = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
