import React, { useState } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';

const schema = yup.object().shape({
  username: yup.string().required('Please enter your username.').min(3, 'Not real name'),
  email: yup
    .string()
    .required('Please enter your email.')
    .matches(/^[0-9]{10}$/),
  password: yup.string().required('Please enter your password.').min(8),
  confirmPassword: yup.string().required('Please reconfirm your password.').min(8),
});

const defaultFormState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const defaultErrorState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = (props) => {
  const [formState, setFormState] = useState(defaultFormState);
  const [errors, setErrors] = useState(defaultErrorState);
  const [isDisable, setIsDisable] = useState(true);

  const validate = (e) => {
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => setErrors({ ...errors, [e.target.name]: '' }))
      .catch((err) => setErrors({ ...errors, [e.target.name]: err.errors[0] }));
  };

  // redo the handle
  const handleChange = (e) => {
    e.persist();
    if (e.target.type === 'text') {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === 'username' || e.target.name === 'email') {
      validate(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>Sign up Now!</h1>
        <fieldset>
          <label>
            User Name
            <input
              type="text"
              name="username"
              onChange={handleChange}
              data-cy="username"
              value={formState.username}
            />
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              onChange={handleChange}
              data-cy="email"
              value={formState.email}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              onChange={handleChange}
              data-cy="password"
              value={formState.password}
            />
          </label>

          <label>
            Confirm Password
            <input
              type="text"
              name="confirmPassword"
              onChange={handleChange}
              data-cy="confirmPassword"
              value={formState.confirmPassword}
            />
          </label>
        </fieldset>
        <button type="cancel"> Cancel </button>
        <button type="submit"> Submit </button>
        <div>
          <p>Have an account?</p>
        </div>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin: 5rem, auto;
  width: 600px;
`;

export default SignUp;

// axios post request "off/login" end points
