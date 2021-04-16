import React, { useState, createContext } from 'react';
import Auth from '../services/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signIn(email, password) {
    const response = await Auth.signIn(email, password)
    setUser(response);
  }

  return (
    <AuthContext.Provider value={{ signed: Auth.isAuthenticated(), user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;