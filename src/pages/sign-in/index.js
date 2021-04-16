import React, { useEffect }from 'react'
import { SignInContainer, SignInForm, SignInHeader, Title, SignInInputs } from './styles';
import { Logo, FormError, TextInput } from '../../components';
import { useAuth, useForm } from '../../hooks';

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
    validated,
    handleChange,
  } = useForm();

  /**
   * Allow form submit by pressing Ender key
   */
  useEffect(() => {
    const listener = e => {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        e.preventDefault();
        handleSignIn();
      }
    }
    document.addEventListener('keydown', listener)
    return () => document.removeEventListener('keydown', listener);
  })

  /**
   * If is signed redirect to main url
   */
  useEffect(() => {
    if (signed) history.push('/');
  }, [history, signed])

  /**
   * If is validated and not signed yet, call signIn
   */
  const handleSignIn = () => {
    if (validated && !signed) signIn(email, password)
  }

  return (
    <SignInContainer>
        <SignInForm>
          <SignInHeader>
            <Logo light/>
            <Title>Books</Title>
          </SignInHeader>

          <SignInInputs>
            <TextInput
              type='email'
              label={'Email'}
              value={email}
              onChange={handleChange}
            />      
            <TextInput
              type='password'
              label={'Senha'}
              value={password}
              onChange={handleChange}
              // this input can additionally submit the form
              onSubmit={handleSignIn}
            />            
          </SignInInputs>
          
          {error && <FormError/>}
        </SignInForm>
    </SignInContainer>
  )
}

export default SignIn

