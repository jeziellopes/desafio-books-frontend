import React, { useState, useEffect } from 'react';
import { AuthContext } from '../contexts';
import Auth from '../services/auth';

/**
 * Auth Context Provider
 */
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(Auth.isAuthenticated());
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    //check if user is authenticated
    checkSigned();

    // if user has a token and...
    // ...user is not in state, get user
    if (signed && !user) getUser();
  });

  // check if user is signed
  const checkSigned = () => {
    const signed = Auth.isAuthenticated();
    setSigned(signed);

    // if not signed, logout,
    if (!signed) {
      logout();
    }
  };

  // get user from storage to state or logout
  const getUser = () => {
    const user = Auth.getUser();
    if (!user) {
      logout();
      return;
    }
    setUser(user);
  };

  // authenticate user
  const signIn = async (email, password) => {
    const response = await Auth.signIn(email, password);

    if (response.status !== 200) {
      handleErrors(response.data);
      return;
    }

    setUser(response);
    setErrors(null);
  };

  const handleErrors = (data) => {
    setErrors(data?.errors);
  };

  // logout user
  const logout = () => {
    Auth.logout();
    setUser(null);
    setErrors(null);
  };

  // return authentication context
  return (
    <AuthContext.Provider value={{ signed, user, signIn, errors, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
