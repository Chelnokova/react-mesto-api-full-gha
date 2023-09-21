import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Логотип Mesto Russia" className="logo__img" />
      </div>
      <div className="header__info">
        <p className="header__text">{props.email}</p>
        <Link
          style={props.style}
          onClick={props.signOut}
          to={props.link}
          className="header__link"
        >
          {props.text}
        </Link>
      </div>
    </header>
  );
}

export default Header;
