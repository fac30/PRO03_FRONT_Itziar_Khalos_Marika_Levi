import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Logo Image */}
      <img
        src={logo}
        alt="Wisdom War Logo"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
      {/* Label under the logo */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
        Welcome to Wisdom War!
      </h1>
    </div>
  );
};

export default Logo;
