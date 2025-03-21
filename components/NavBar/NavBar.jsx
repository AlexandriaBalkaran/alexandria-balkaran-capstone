import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="nav__container">
      <nav className="nav__container">
        <NavLink to="/" className="nav__link">
          <h2 className="nav__heading">Home</h2>
        </NavLink>
        <NavLink to="/neighbourhood" className="nav__link">
          <h2 className="nav__heading">Neighbourhood</h2>
        </NavLink>
        <NavLink to="/maps" className="nav__link">
          <h2 className="nav__heading">Maps</h2>
        </NavLink>
        <NavLink to="/favourites" className="nav__link">
          <h2 className="nav__heading">Favourites</h2>
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
