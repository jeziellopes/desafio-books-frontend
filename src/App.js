import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { AuthProvider, ThemeProvider } from './providers';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
