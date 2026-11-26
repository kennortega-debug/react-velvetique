import TextInput from "../atoms/TextInput";

const FormField = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  icon,
  hint,
  error,
  value,
  onChange,
  required = false,
  minLength,
  maxLength,
  min,
  max,
  step,
}) => {
  return (
    <div className={`form-field ${error ? "has-error" : ""}`}>
      <TextInput
        id={id}
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        icon={icon}
        hint={hint}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        step={step}
      />

      {error && (
        <small className="field-error" role="alert">
          {error}
        </small>
      )}
    </div>
  );
};

export default FormField;
