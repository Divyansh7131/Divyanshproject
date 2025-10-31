import './pagescss/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="login-wrapper">
        <form className="login-card">
          <div className="login-header">
            <i className="fa fa-user-circle-o icon"></i>
            <h5 className="login-title">Sign-in Your Account</h5>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <i className="fa fa-envelope" /> Email
            </label>
            <input type="text" id="email" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <i className="fa fa-lock" /> Password
            </label>
            <input type="password" id="password" className="form-control" required />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="more-links">
            <Link to="/Register">Create Account</Link> •
            <Link to="/Forgotpassword"> Forgot Password</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
