import { useEffect, useRef, useState } from "react";

export const OtpGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {}, []);
  
  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">Click 'Generate OTP' to get a code</h2>
      <p id="otp-timer" aria-live="polite"></p>
      <button id="generate-otp-button">Generate OTP</button>
    </div>
  );
};
