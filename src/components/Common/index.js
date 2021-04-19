import styled from 'styled-components';
import { fadeAnimations } from '../../styles';

/**
 * Default Row Styled Component
 */
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 * Default Column Styled Component
 */
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Default Logo Header Styled Component
 */
export const LogoHeader = styled(Row)`
  height: 40px;
  width: 198.4px;
  margin-bottom: 32px;
  cursor: pointer;

  ${fadeAnimations}
`;

/**
 * Default LogoTitle Styled Component
 */
export const LogoTitle = styled.label`
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.darkslategray};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  line-height: 36px;
  margin-left: 17px;
  cursor: pointer;
`;
