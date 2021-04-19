import React from 'react';
import { Container } from './styles';

function CloseButton({ onClick }) {
  return (
    <Container>
      <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
      >
        <circle r="16" fill="#fff" transform="matrix(-1 0 0 1 16 16)"></circle>
        <circle
          r="15.5"
          stroke="#333"
          strokeOpacity="0.2"
          transform="matrix(-1 0 0 1 16 16)"
        ></circle>
        <path fill="#fff" d="M0 0H16V16H0z" transform="translate(8 8)"></path>
        <path
          fill="#333"
          stroke="#333"
          strokeWidth="0.1"
          d="M20.035 12.507l.036-.036-.036-.035-.471-.471-.035-.036-.036.036L16 15.458l-3.493-3.493-.036-.036-.035.036-.471.471-.036.035.036.036L15.458 16l-3.493 3.493-.036.036.036.035.471.471.035.036.036-.036L16 16.542l3.493 3.493.036.036.035-.036.471-.471.036-.035-.036-.036L16.542 16l3.493-3.493z"
        ></path>
      </svg>
    </Container>
  );
}

export default React.memo(CloseButton);
