import c from './ValidateInput.module.css';

const ValidatedInput = (props) => {
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