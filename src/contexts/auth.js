import React, { useState, useEffect, createContext } from 'react';
import Auth from '../services/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const signed = Auth.isAuthenticated();
    if (!signed) logout();
    if (signed && !user) getUser();
  })
  
  const getUser = () => {
    const user = Auth.getUser()
    setUser(user);
  }

  const signIn = async (email, password) => {
    const response = await Auth.signIn(email, password)
    setUser(response);
  }

  const logout = () => {
    Auth.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: Auth.isAuthenticated(), user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;