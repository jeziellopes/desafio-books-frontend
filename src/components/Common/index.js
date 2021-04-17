import styled from 'styled-components';

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
`;

/**
 * Default LogoTitle Styled Component
 */
export const LogoTitle = styled.label`
  color: ${props => props.light ? '#fff' : '#333'};
  font-weight: 300; //light
  font-size: 28px;
  line-height: 36px;
  margin-left: 17px;
`;