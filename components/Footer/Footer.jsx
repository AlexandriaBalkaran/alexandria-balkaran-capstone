import "./Footer.scss";
import { Link } from "react-router-dom";
import facebook from '../../src/assets/images/Facebook.svg';
import twitter from '../../src/assets/images/X_twitter.svg';
import insta from '../../src/assets/images/Instagram.svg';
import pinterest from '../../src/assets/images/Pinterest.svg';



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
              src={facebook}
              alt="facebook icon"
            ></img>
          </a>
          <a href="https://x.com/?lang=en">
            <img className="social__icons-img"
              src={twitter}
              alt="twitter icon"
            ></img>
          </a>
          <a href="https://www.instagram.com/">
            <img className="social__icons-img"
              src={insta}
              alt="instagram icon"
            ></img>
          </a>
          <a href="https://www.pinterest.com/">
            <img className="social__icons-img"
              src={pinterest}
              alt="pinterest icon"
            ></img>
          </a>
        </div>
        {/* <img
        className="skyline__image"
        src="src/assets/images/homepage-skyline-pd2.svg"
        alt="skyline of Toronto cartoon"
      ></img> */}
    </footer>
  );
};

export default Footer;
