import styled from 'styled-components';
import { Row } from '../../components/Common';
import { fadeAnimations } from '../../styles';

export const Container = styled(Row)`
  height: 32px;
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  border-radius: 16px;

  @media (max-width: 414px) {
    justify-content: center;
  }

  ${fadeAnimations}
`;

export const PaginationContainer = styled(Row)`
  padding: 0px 16px;
`;

export const ActionContainer = styled(Row)`
  display: flex;
  justify-content: space-between;
  width: 72px;

  @media (max-width: 414px) {
    width: 32px;
  }
`;

/**
 * Font-Weight Regular Label
 */
export const PaginationLabel = styled.label`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ strong, theme }) =>
    strong ? theme.fontWeight.Medium : theme.fontWeight.Regular};
`;

/**
 * Font-Weight Medium Label
 */
export const MediumLabel = styled(PaginationLabel)`
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
`;
