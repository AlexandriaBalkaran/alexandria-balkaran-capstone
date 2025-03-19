import "./Header.scss";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="header__container">
      <nav>
        <Link to="/">
            <h1>Pour Decisions</h1>
        </Link>
      </nav>
      <NavBar/>
    </header>
  );
};
export default Header;
