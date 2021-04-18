import styled from 'styled-components';
import { fadeAnimations } from '../../styles';
import { Row, Column } from '../Common';

export const Container = styled(Row)`
  background-color: ${({ theme }) => theme.colors.blackOpacity};
  border-radius: 4px;
  width: 368px;
  height: 60px;
  margin-top: 16px;
  justify-content: space-between;

  ${fadeAnimations}

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputContainer = styled(Column)`
  margin-right: 16px;
  width: 100%;
`;

export const ActionContainer = styled(Column)`
  justify-content: center;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.grayOpacity};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-top: 8px;
  margin-left: 16px;
`;

export const InputValue = styled.input`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-top: 4px;
  margin-left: 16px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  height: 36px;
  width: 85px;
  border-radius: 44px;
  border: none;
  outline: none;
  margin-right: 12px;
  cursor: pointer;
`;
