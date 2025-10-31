import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import './forgotpassword.css';
import { Link } from 'react-router-dom';
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = () => {
    if (!email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Invalid email format';
    return '';
  };

  const handleSubmit = () => {
    const error = validateEmail();
    if (!error) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(error);
    }
  };

  return (
    <div
      className="forgot-container"
      style={{
        background:
          'linear-gradient(135deg, #ff6b35 0%, #ff8c42 25%, #ffa726 50%, #ffb347 75%, #ffc870 100%)',
      }}
    >
      <div className="forgot-box">
        <div className="header-line"></div>

        <div className="text-center mb-6">
          <h2 className="title">Forgot Password</h2>
          <p className="sub">
            Enter your registered email to reset your password
          </p>
        </div>

        {submitted && (
          <div className="success-box">
            <CheckCircle className="icon" />
            <span>Password reset link sent successfully!</span>
          </div>
        )}

        <div>
          <label className="label">Email Address</label>
          <div className="input-wrap">
            <Mail className="i-icon" />
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors('');
              }}
              style={{
                borderColor: errors ? '#ff6b35' : '#e5e7eb',
                ...(email && !errors ? { borderColor: '#ffa726' } : {}),
              }}
            />
          </div>

          {errors && <p className="error">{errors}</p>}
        </div>

        <button onClick={handleSubmit} className="submit-btn">
          Send Reset Link
        </button>

        <div className="bottom-text">
          <span className="signin"><Link to ="/Login">Back to Sign In</Link></span>
        </div>
      </div>
    </div>
  );
}
