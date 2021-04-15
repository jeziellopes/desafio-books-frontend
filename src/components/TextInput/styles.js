import styled from 'styled-components';
import { Row, Column } from '../Common';

export const Container = styled(Row)`
  background-color: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  width: 368px;
  height: 60px;
  margin-top: 16px;
  justify-content: space-between;

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
  color: rgba(255, 255, 255, 0.32);
  font-weight: 400; //regular
  font-size: 12px;
  margin-top: 8px;
  margin-left: 16px;
`;

export const InputValue = styled.input`
  color: #fff;
  font-weight: 400; //regular
  font-size: 16px;
  margin-top: 4px;
  margin-left: 16px;
`;

export const Button = styled.button`
  color: #B22E6F;
  font-weight: 500; //medium  
  font-size: 16px;
  height: 36px;
  width: 85px;
  border-radius: 44px;
  border: none;
	outline: none;
  margin-right: 12px;
  cursor: pointer;
`