const FormActions = ({ onCancel, submitText = "Guardar" }) => {
  return (
    <div className="form-actions">
      <button type="button" className="secondary" onClick={onCancel}>
        Cancelar
      </button>

      <button type="submit" className="primary">
        {submitText}
      </button>
    </div>
  );
};

export default FormActions;
