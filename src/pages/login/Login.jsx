import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrap">
        <h1 className="login__title">SIGN IN</h1>
        <form className="login__form">
          <input className="login__input" placeholder="Username" />
          <input className="login__input" placeholder="Password" />
          <button className="login__btn">lOGIN</button>
          <p className="login__link">FORGOTTON PASSWORD</p>
          <p className="login__link">CREATE A NEW ACCOUNT</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
