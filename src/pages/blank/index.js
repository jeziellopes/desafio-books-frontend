import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Blank Page Component
 */
function Blank() {
  const history = useHistory();

  // at start redirect to books page
  useEffect(() => {
    history.push('/books');
  });

  return <></>;
}

export default Blank;
