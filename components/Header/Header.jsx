import "./Header.scss";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="header__container">
        <Link to="/">
          <img
            className="logo"
            src="src/assets/images/PD - Logo.svg"
            alt="PD logo"
          ></img>
          <h1>
            Pour Decisions
          </h1>
        </Link>
      <NavBar />
    </header>
  );
};
export default Header;
