import React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import c from './ValidateInput.module.css';

type PropsType = {
    meta: WrappedFieldMetaProps
    input: WrappedFieldInputProps
    element: any   // input || textarea || select
    type: string
    label?: string
    placeholder?: string
}

const ValidatedInput = (props: PropsType) => {
  const { touched, error } = props.meta;
  const { input, type, label, placeholder } = props;
  const hasError = touched && error;

  return (
    <div className={c.input}>
      { label && <label>{label}</label> }
      <props.element
        type={type}
        placeholder={placeholder}
        className={` ${ hasError ? c.error : '' }`}
        { ...input }
      />
      { hasError && <p className={c.errorMsg}>* { error }</p> }
    </div>
  );
}

export default ValidatedInput;