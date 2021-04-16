import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </>
  );
}

export default App;
