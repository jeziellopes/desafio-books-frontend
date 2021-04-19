import React, { useEffect } from 'react';
import { SignInContainer, SignInForm, SignInInputs } from './styles';
import { LogoHeader, LogoTitle } from '../../components/Common';
import { Logo, FormError, TextInput, Helmet } from '../../components';
import { useAuth, useForm, useEventListener } from '../../hooks';
import keyDownHandler from '../../utils/handler';

/**
 * SignIn Page
 *
 * @returns {React.Component}
 */
const SignIn = ({ history }) => {
  const { signed, signIn } = useAuth();
  const {
    values: { email, password },
    error,
    errors,
    validated,
    handleChange,
  } = useForm();

  /**
   * Allow form submit by pressing Ender key
   */
  useEventListener('keydown', (e) => keyDownHandler(e, handleSignIn));

  /**
   * If is signed redirect to main url
   */
  useEffect(() => {
    if (signed) history.push('/books');
  }, [history, signed]);

  /**
   * If is validated and not signed yet, call signIn
   */
  const handleSignIn = () => {
    if (validated && !signed) signIn(email, password);
  };

  return (
    <SignInContainer>
      <Helmet title={'SignIn - Ioasys Books'} />
      <SignInForm>
        <LogoHeader>
          <Logo light />
          <LogoTitle light>Books</LogoTitle>
        </LogoHeader>

        <SignInInputs>
          <TextInput
            type="email"
            label={'Email'}
            value={email}
            onChange={handleChange}
          />
          <TextInput
            type="password"
            label={'Senha'}
            value={password}
            onChange={handleChange}
            // this input can additionally submit the form
            onSubmit={handleSignIn}
          />
        </SignInInputs>

        {error && <FormError />}
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;
