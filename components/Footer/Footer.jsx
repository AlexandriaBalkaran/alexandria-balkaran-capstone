import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer__container">
        <div className="footer__text">
          <Link to="/">
            <h1>Pour Decisions</h1>
          </Link>
        </div>
        <div className="social__icons">
          <a href="https://www.facebook.com/">
            <img className="social__icons-img"
              src="../src/assets/images/Facebook.svg"
              alt="facebook icon"
            ></img>
          </a>
          <a href="https://x.com/?lang=en">
            <img className="social__icons-img"
              src="../src/assets/images/X_twitter.svg"
              alt="twitter icon"
            ></img>
          </a>
          <a href="https://www.instagram.com/">
            <img className="social__icons-img"
              src="../src/assets/images/Instagram.svg"
              alt="instagram icon"
            ></img>
          </a>
          <a href="https://www.pinterest.com/">
            <img className="social__icons-img"
              src="../src/assets/images/Pinterest.svg"
              alt="pinterest icon"
            ></img>
          </a>
        </div>
    </footer>
  );
};

export default Footer;
