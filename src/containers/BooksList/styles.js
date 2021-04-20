import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  flex-flow: row wrap;
  margin-top: 40px;
  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
`;
