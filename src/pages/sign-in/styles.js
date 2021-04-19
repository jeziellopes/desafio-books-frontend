import styled from 'styled-components';
import { Column } from '../../components/Common';
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

  @media (min-width: 320px) {
    background-position: 41.5%;
  }

  @media (min-height: 700px) {
    background-position: 46%;
  }

  @media (height: 568px) {
    background-position: 40%;
  }
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

  @media (min-width: 540) {
    width: 308px;
  }

  @media (max-width: 600px) {
    margin-left: 0px;
    padding: 16px;
    margin: 0;
  }
`;

export const SignInInputs = styled(Column)`
  justify-content: end;
  margin-bottom: 16px;
`;
