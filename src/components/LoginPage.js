import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const [remember, setRemember] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      // Verify OTP
      axios.post('/api/verify-otp', { phone, otp }).then(response => {
        if (response.data.success) {
          setStep(2);
        } else {
          alert('Invalid OTP');
        }
      });
    } else {
      // Login with email and password
      axios.post('/api/login', { email, password, remember }).then(response => {
        if (response.data.success) {
          window.location.href = '/user-details';
        } else {
          alert('Login failed');
        }
      });
    }
  };

  return (
    <div>
      {step === 1 ? (
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember Me
          </label>
        </div>
      )}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default LoginPage;
