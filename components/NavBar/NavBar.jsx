import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="nav__container">
      <nav className="nav__container">
        <Link to="/">
            <h2 className="nav__heading">Home</h2>
        </Link>
        <Link to="/location">
            <h2 className="nav__heading">Location</h2>
        </Link>
      </nav>
    </header>
  );
};
export default NavBar;
