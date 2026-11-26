import SectionHeading from "../molecules/SectionHeading";
import UserForm from "./UserForm";

const UserManagement = ({
  usuarios,
  onNuevo,
  onEditar,
  onEliminar,
  formUsuario,
  ...formProps
}) => {
  return (
    <section className="admin-view">
      <SectionHeading eyebrow="Accesos" title="Mantenedor de usuarios">
        <button className="primary" type="button" onClick={onNuevo}>
          + Nuevo usuario
        </button>
      </SectionHeading>

      {/* Aquí irá la tabla de usuarios */}

      {formUsuario && <UserForm formUsuario={formUsuario} {...formProps} />}
    </section>
  );
};

export default UserManagement;
