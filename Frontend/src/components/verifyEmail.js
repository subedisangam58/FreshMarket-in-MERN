import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './css/verifyEmail.css';

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Assuming a 6-digit verification code
  const [codeDigits, setCodeDigits] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Initialize the array of refs
    inputRefs.current = inputRefs.current.slice(0, codeDigits.length);
    
    if (location.state?.formData) {
      setUserData(location.state.formData);
    } else {
      handleError("Session expired. Please try signing up again.");
      navigate('/signup');
    }
  }, [location.state, navigate, codeDigits.length]); // Added codeDigits.length as dependency

  // Combine all digits into a single verification code
  const getVerificationCode = () => codeDigits.join('');

  // Handle change for each digit input
  const handleDigitChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    const newCodeDigits = [...codeDigits];
    newCodeDigits[index] = value.slice(0, 1);
    setCodeDigits(newCodeDigits);
    
    // Auto-focus next input if value is added
    if (value && index < codeDigits.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle keydown for navigation between inputs using backspace
  const handleKeyDown = (index, e) => {
    // If backspace is pressed and current field is empty, focus previous field
    if (e.key === 'Backspace' && !codeDigits[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event to distribute digits
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim();
    
    // Check if the pasted content is a valid number
    if (!/^\d+$/.test(pasteData)) return;
    
    const digits = pasteData.split('').slice(0, codeDigits.length);
    const newCodeDigits = [...codeDigits];
    
    // Fill the digits array with the pasted values
    digits.forEach((digit, index) => {
      newCodeDigits[index] = digit;
    });
    
    setCodeDigits(newCodeDigits);
    
    // Focus the next empty input or the last input
    const nextEmptyIndex = newCodeDigits.findIndex(digit => !digit);
    if (nextEmptyIndex !== -1 && nextEmptyIndex < codeDigits.length) {
      inputRefs.current[nextEmptyIndex].focus();
    } else if (digits.length < codeDigits.length) {
      inputRefs.current[digits.length].focus();
    } else {
      inputRefs.current[codeDigits.length - 1].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    
    const verificationCode = getVerificationCode();
    
    if (verificationCode.length !== codeDigits.length) {
      return handleError('Please enter the complete verification code');
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify-email", {
        method: "POST",
        body: JSON.stringify({ code: verificationCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Verification failed");
      }

      handleSuccess("Email verified successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      handleError(error.message || "Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async (e) => {
    e.preventDefault();
    if (!userData?.email) return;
    
    try {
      setIsLoading(true);
      
      handleSuccess("A new verification code has been sent to your email.");
    } catch (error) {
      handleError("Failed to resend verification code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section className="verify-section">
        <h2>Verify Your Email</h2>
        <p>We've sent a verification code to {userData?.email}. Please enter it below to complete your registration.</p>

        <form onSubmit={handleVerify}>
          <div className="form-group">
            <label htmlFor="verificationCode">Verification Code</label>
            
            <div className="verification-code-container" onPaste={handlePaste}>
              {codeDigits.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  className="code-input"
                  value={digit}
                  onChange={(e) => handleDigitChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1}
                  autoFocus={index === 0}
                  aria-label={`Digit ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button type="submit" className="verify-btn" disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Verify Email & Create Account'}
          </button>
        </form>

        <button 
          className="resend-code" 
          onClick={handleResendCode}
          disabled={isLoading}
        >
          Didn't receive a code? Resend
        </button>

        <ToastContainer />
      </section>
    </main>
  );
};

export default VerifyEmail;