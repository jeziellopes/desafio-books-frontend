import styled from 'styled-components';
import { Row, Column } from '../../components/Common';
import background from '../../assets/images/background.png';

export const SignInContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-size: cover;
  height: 100%;
`;

export const SignInHeader = styled(Row)`
  height: 40px;
  width: 198.4px;
  margin-bottom: 32px;
`;

export const SignInForm = styled.div`
  height: 224px;
  margin-left: 115px;
  justify-content: space-between;

  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  @media (min-width: 599) {
    width: 368px;
  }

  @media (max-width: 600px) {
    margin-left: 0px;
    padding: 16px;
    margin: 0;
  }
`;

export const Title = styled.label`
  color: white;
  font-style: normal;
  font-weight: 200;
  font-size: 28px;
  line-height: 36px;
  margin-left: 17px;
`;

export const SignInInputs = styled(Column)`
  justify-content: end;
  margin-bottom: 16px;
`;