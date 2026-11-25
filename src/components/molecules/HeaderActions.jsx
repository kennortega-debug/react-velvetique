import HeaderIcon from "../atoms/HeaderIcon";

const HeaderActions = () => {
  return (
    <div className="header-actions">
      <HeaderIcon to="/login" icon="bi bi-person" />

      <HeaderIcon to="/carrito" icon="bi bi-bag" />
    </div>
  );
};

export default HeaderActions;
