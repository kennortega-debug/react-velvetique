const Textarea = ({ label, name, value, onChange, maxLength, ...props }) => {
  return (
    <label>
      {label}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        {...props}
      />
    </label>
  );
};

export default Textarea;
