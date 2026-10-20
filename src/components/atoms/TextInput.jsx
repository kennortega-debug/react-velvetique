const TextInput = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  icon,
  hint,
  autoComplete,
  inputMode,
  required = false,
  value,
  onChange,
  minLength,
}) => {
  return (
    <div className="campo">
      <label htmlFor={id}>{label}</label>

      <div className="i-input">
        {icon && <i className={`bi ${icon}`} aria-hidden="true"></i>}

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          required={required}
          value={value}
          onChange={onChange}
          minLength={minLength}
          aria-describedby={hint ? `${id}-hint` : undefined}
        />
      </div>

      {hint && (
        <small id={`${id}-hint`} className="field-hint">
          {hint}
        </small>
      )}
    </div>
  );
};

export default TextInput;
