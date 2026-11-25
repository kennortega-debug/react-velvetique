import { Link } from "react-router-dom";

const HeaderIcon = ({ to, icon }) => {
  return (
    <Link to={to} className="icono">
      <i className={icon}></i>
    </Link>
  );
};

export default HeaderIcon;
