import c from './ValidateInput.module.css';

const ValidatedInput = (props) => {
  const { touched, error } = props.meta;
  const { input, type, label, placeholder } = props;

  return (
    <div className={c.input}>
      { label && <label>{label}</label> }
      <props.element
        type={type}
        placeholder={placeholder}
        className={`${error && c.error }`}
        { ...input }
      />
      { (touched && error) && <p className={c.errorMsg}>* { error }</p> }
    </div>
  );
}

export default ValidatedInput;