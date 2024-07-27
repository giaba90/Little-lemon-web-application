
const FormField = ({ children, label, htmlFor, hasError, errorMessage , obligatory }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}  {obligatory ? <span>*</span> : null}</label>
      {children}
      {hasError && errorMessage ? 
        <p data-testid="error-message">{errorMessage}</p> : null}
      
    </div>
  );
};

export default FormField;
