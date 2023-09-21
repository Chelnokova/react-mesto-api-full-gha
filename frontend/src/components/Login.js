import React, { useState } from "react";

function Login(props) {
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

    props.handleLogin(password, email);
  };

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form onSubmit={handleSubmit} className="login__inputs">
        <div className="login__inputs-wrap">
          <input
            className="login__input"
            value={email}
            onChange={handleChangeEmail}
            id="username"
            name="username"
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="login__input"
            value={password}
            onChange={handleChangePassword}
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            required
          />
        </div>
        <button className="login__button" type="submit" onSubmit={handleSubmit}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
