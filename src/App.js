import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { AuthProvider, ThemeProvider, HelmetProvider } from './providers';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AuthProvider>
        <HelmetProvider>
          <Routes />
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
