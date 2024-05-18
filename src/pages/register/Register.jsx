import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="register__wrap">
        <h1 className="register__title">CREATE AN ACCOUNT</h1>
        <form className="register__form">
          <input className="register__input" placeholder="Name" />
          <input className="register__input" placeholder="Last Name" />
          <input className="register__input" placeholder="Username" />
          <input className="register__input" placeholder="Email" />
          <input className="register__input" placeholder="Password" />
          <input className="register__input" placeholder="Confirm Password" />
          <span className="register__agreement">
            By creating an account, I consent to the proccessing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="register__btn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
