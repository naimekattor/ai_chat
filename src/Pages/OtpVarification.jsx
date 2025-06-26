import React, { useState, useRef } from 'react';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && inputRefs[index - 1]) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');
    if (fullOtp.length === 4) {
      alert(`OTP Submitted: ${fullOtp}`);

    } else {
      alert('Please enter the complete 4-digit OTP.');
    }
  };

  const handleResendOtp = () => {
    alert('Resending OTP...');

  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-12 h-12 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>

        {/* OTP Verification Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          OTP Verification
        </h1>
        <p className="text-gray-600 text-base leading-relaxed mb-6 text-center">
          Enter OTP Sent To na**@gmail.com
        </p>

        <form onSubmit={handleSubmit}>
          {/* OTP Input Fields */}
          <div className="flex justify-center space-x-2 mb-6">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                className="w-14 h-14 text-center text-2xl font-bold text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={(e) => e.target.select()}
                ref={inputRefs[index]}
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>

        {/* Resend OTP Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Didn't receive the code?{' '}
          <a
            href="#"
            onClick={handleResendOtp}
            className="text-blue-600 hover:text-blue-700 font-semibold transition duration-200"
          >
            Resend OTP
          </a>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
