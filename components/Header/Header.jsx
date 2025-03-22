import "./Header.scss";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import logo from "../../src/assets/images/PD - Logo.svg";

const Header = () => {
  return (
    <header className="header__container">
      <Link to="/">
        <h1>Pour Decisions</h1>
        <img className="logo" src={logo} alt="Pour Decisions logo"></img>
      </Link>
      <NavBar />
    </header>
  );
};
export default Header;
