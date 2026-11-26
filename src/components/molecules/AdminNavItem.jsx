const AdminNavItem = ({ label, active, onClick }) => {
  return (
    <button type="button" className={active ? "active" : ""} onClick={onClick}>
      {label}
    </button>
  );
};

export default AdminNavItem;
