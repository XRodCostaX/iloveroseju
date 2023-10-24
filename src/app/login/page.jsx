const Login = () => {
  return (
    <div className="login">
      <h2>Insira com seu Login e Senha para entrar</h2>
      <form action="">
        <label htmlFor="">
          <span>Email:</span>

          <input type="email" className="email-login" />
        </label>
        <label htmlFor="">
          <span>Password</span>
          <input type="password" name="password" className="password-login" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Login;
