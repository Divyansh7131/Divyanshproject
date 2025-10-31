import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, Check } from 'lucide-react';
import './Register.css';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
   <div className="signup-wrapper">
  <div className="signup-container">
    <div className="signup-card">
      <div className="gradient-top" />

      <div className="signup-header">
        <div className="icon-wrapper">
          <User className="icon" />
        </div>
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Join us today and get started</p>
      </div>

      {submitted && (
        <div className="success-alert">
          <Check className="success-icon" />
          <span>Account created successfully!</span>
        </div>
      )}

      <div className="form-group">
        <label>Full Name</label>
        <div className="input-box">
          <User className="input-icon" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`input ${errors.fullName ? "error-border" : ""}`}
          />
        </div>
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <div className="input-box">
          <Mail className="input-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`input ${errors.email ? "error-border" : ""}`}
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <div className="input-box">
          <Lock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className={`input ${errors.password ? "error-border" : ""}`}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <div className="input-box">
          <Lock className="input-icon" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className={`input ${errors.confirmPassword ? "error-border" : ""}`}
          />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eye-btn">
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>

      <button onClick={handleSubmit} className="signup-btn">
        Create Account
      </button>

      <div className="signin-text">
        Already have an account?
        <span className="signin-link"><Link to="/Login"> Sign In</Link></span>
      </div>
    </div>
  </div>
</div>

  );
}