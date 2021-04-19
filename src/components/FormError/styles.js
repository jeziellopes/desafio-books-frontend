import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  font-size: ${({ theme }) => theme.fontSize.large};
`;
