import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import { InputGroup } from './InputStyle';

interface IInput {
  primary?: boolean;
  placeholder?: string;
  type?: string;
  checkbox?: boolean;
  name?: string;
  register?: any;
  errors?: any;
}

const Input: React.FC<IInput> = ({ primary, type, placeholder, register, children, errors }) => {
  return (
    <InputGroup primary={primary} type={type}>
      <label>{placeholder}</label>
      <input {...register} type={type} />
      {children}
      {console.log(errors)}
    </InputGroup>
  );
};

export default Input;
