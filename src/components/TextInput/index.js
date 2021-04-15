import React from 'react'

import { Container, InputContainer, ActionContainer, Label, InputValue, Button } from './styles';

/**
 * TextInput Component
 * 
 * @param {string} type text input type 
 * @param {string} label define a label for the input 
 * @param {string} string define the input value
 * @param {function} onChange handle input change events
 * @param {function} onSubmit handle form submit
  * @returns {React.Component}
 */

export default function TextInput({ type, label, value, onChange, onSubmit }) {
  return (
    <Container>
      <InputContainer>
        <Label>{label}</Label>
        <InputValue type={type} onChange={onChange} value={value}/>
      </InputContainer>

      <ActionContainer>
        {onSubmit
          && <Button onClick={onSubmit}>Entrar</Button>
        }
      </ActionContainer>
    </Container>
  )
}
