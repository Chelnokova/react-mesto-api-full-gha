import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleRegister(password, email);

    setPassword("");
    setEmail("");
  };

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="register__inputs">
        <div className="register__inputs-wrap">
          <input
            className="register__input"
            value={email}
            onChange={handleChangeEmail}
            id="username"
            name="username"
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="register__input"
            value={password}
            onChange={handleChangePassword}
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            required
          />
        </div>
        <button
          className="register__button"
          type="submit"
          onSubmit={handleSubmit}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="register__text">
        Уже зарегистрированы?
        <Link to={props.link} className="register__link">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
