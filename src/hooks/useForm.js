import { useState, useEffect } from 'react';
import Form from '../services/form';

const useForm = (callback = (values) => {}) => {

  const [values, setValues] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Check if the form is empty  
   */
  useEffect(() => {
    setIsEmpty(!Object
      .values(values)
      .some(value => value !== ''))
  }, [values])

  /**
   * Check if form is validated and not empty
   */
  useEffect(() => {
    setError(!Form.validate(values) && !isEmpty)
  }, [isEmpty, values]);
  
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (!error && !isEmpty) {
      setIsSubmitting(true);
      callback(values)
    }
  }

  const handleChange = (event) => {
    setValues(values => ({
      ...values,
      [event.target.type]: event.target.value
    }))
  }

  return {
    handleChange,
    handleSubmit,
    isSubmitting,
    values,
    error
  }
}

export default useForm;