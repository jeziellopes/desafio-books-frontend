import React from 'react';
import Helmet from 'react-helmet';
import { useAuth } from '../../hooks';

function HelmetWrapper({ title }) {
  const { signed } = useAuth();
  return (
    <Helmet>
      <title>{'SignIn - Ioasys Books'}</title>
      <meta name="theme-color" content={signed ? '#fff' : '#AB2680'} />
    </Helmet>
  );
}

export default HelmetWrapper;
