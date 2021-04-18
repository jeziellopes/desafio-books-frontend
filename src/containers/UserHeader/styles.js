import styled from 'styled-components';
import { Row } from '../../components';
import { fadeAnimations } from '../../styles';

export const Container = styled(Row)`
  height: 32px;
`;

export const WelcomeLabel = styled.label`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  margin-right: 16px;
  
  @media (max-width: 700px) {
    display: none;
  }

  ${fadeAnimations}
`;

export const UserLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-right: unset;
  
  @media (max-width: 700px) {
    display: none;
  }
`
