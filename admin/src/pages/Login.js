import React, { useState } from 'react';
import './Login.css';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import { ReactComponent as LockIcon } from '../assets/lock.svg';
import { ReactComponent as EyeIcon } from '../assets/eye.svg';
import { ReactComponent as EyeOffIcon } from '../assets/eye-off.svg';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1 className="login-title">
          <span className="bold">Shuttle</span>
          <span className="blue">Sync</span>
        </h1>
        <div className="login-box">
          <h2 className="portal-title">Admin Portal</h2>
          <form>
            <div className="input-group">
              <span className="input-icon"><UserIcon /></span>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <span className="input-icon"><LockIcon /></span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <span
                className="input-icon input-eye"
                onClick={() => setShowPassword((v) => !v)}
                style={{ cursor: 'pointer' }}
                title="Show/Hide Password"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;