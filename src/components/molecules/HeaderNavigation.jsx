import NavLink from "../atoms/NavLink";

const HeaderNavigation = () => {
  return (
    <nav>
      <ul className="nav-lista">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/login">SIGN IN</NavLink>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
