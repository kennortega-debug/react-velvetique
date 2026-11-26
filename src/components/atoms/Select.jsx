const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Selecciona una opción",
}) => {
  return (
    <label>
      {label}
      <select name={name} value={value} onChange={onChange}>
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
