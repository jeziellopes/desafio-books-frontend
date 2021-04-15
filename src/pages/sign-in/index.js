import React, { useState, useEffect } from 'react'
import { SignInContainer, SignInForm, SignInHeader, Title, SignInInputs } from './styles';
import { Logo, FormError, TextInput } from '../../components';
import Validation from '../../services/validation';

/**
 * SignIn Page
 * 
 * @returns {React.Component}
 */
const SignIn = () => {
  const [email, setEmail] = useState('books@ioasys.com');
  const [password, setPassword] = useState('12341234');
  const [isValidForm, setIsValidForm] = useState(false);

  /**
   * Call validation on every component reload
   */
  useEffect(() => validate())

  /**
   * Validate form inputs
   */
  const validate = () => {
    const isValidEmail = Validation.isValidEmail(email)
    const isValidPassword = Validation.isValidPassword(password)

    setIsValidForm(isValidEmail && isValidPassword)
  }

  /**
   * Submit the form calling authentication
   */
  const handleSubmit = () => {
    if (isValidForm) {
      // authentication action
    }
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
              onChange={(e) => setEmail(e.target.value)}
            />      
            <TextInput
              type='password'
              label={'Senha'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // this input can additionally submit the form
              onSubmit={handleSubmit}
            />            
          </SignInInputs>
          
          { !isValidForm && <FormError/>}
        </SignInForm>
    </SignInContainer>
  )
}

export default SignIn

