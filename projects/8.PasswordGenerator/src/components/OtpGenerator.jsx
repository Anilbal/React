import { useEffect } from "react";

export const OtpGenerator = () => {
  useEffect(() => {}, []);
  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">Click 'Generate OTP' to get a code</h2>
      <p id="otp-timer" aria-live="assertive"></p>
    </div>
  );
};
