import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="nav__container">
      <nav className="nav__container">
        <Link to="/">
            <h2 className="nav__heading">Home</h2>
        </Link>
        <Link to="/neighbourhood">
            <h2 className="nav__heading">Neighbourhood</h2>
        </Link>
        <Link to="/favourites">
            <h2 className="nav__heading">Favourites</h2>
        </Link>
      </nav>
    </header>
  );
};
export default NavBar;
