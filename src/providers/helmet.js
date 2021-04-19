import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

export default function Helmet({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
