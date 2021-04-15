import React from 'react'
import { SignInContainer, SignInForm, SignInHeader, Title, SignInInputs } from './styles';
import { Logo, FormError, TextInput } from '../../components';
import useForm from '../../hooks/useForm';

/**
 * SignIn Page
 * 
 * @returns {React.Component}
 */
const SignIn = () => {
  const {
    values,
    error,
    handleChange,
    handleSubmit
  } = useForm((values) => console.log(values))

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
              value={values.email}
              onChange={handleChange}
            />      
            <TextInput
              type='password'
              label={'Senha'}
              value={values.password}
              onChange={handleChange}
              // this input can additionally submit the form
              onSubmit={handleSubmit}
            />            
          </SignInInputs>
          
          {error && <FormError/>}
        </SignInForm>
    </SignInContainer>
  )
}

export default SignIn

