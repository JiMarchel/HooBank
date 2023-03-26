import React from "react";

const Button = ({ style }) => (
  <button
    type="button"
    className={`bg-blue-gradient text-primary text-poppins py-4 px-6 font-medium text-[18px] outline-none ${style} rounded-[10px]`}
  >
    Get Started
  </button>
);

export default Button;
