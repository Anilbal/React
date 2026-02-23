import { useEffect, useRef, useState } from "react";

export const OtpGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  //generate opt
  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimeLeft(5);
  };

  useEffect(() => {
    if (timeLeft > 0 && !timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">Click 'Generate OTP' to get a code</h2>
      <p id="otp-timer" aria-live="polite"></p>
      <button id="generate-otp-button">Generate OTP</button>
    </div>
  );
};
