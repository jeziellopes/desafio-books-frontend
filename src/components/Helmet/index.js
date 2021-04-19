import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../hooks';

function HelmetWrapper({ title }) {
  const { signed } = useAuth();
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="theme-color" content={signed ? '#fff' : '#AB2680'} />
    </Helmet>
  );
}

export default HelmetWrapper;
