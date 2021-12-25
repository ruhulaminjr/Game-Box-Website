import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto mt-12 mb-4">
      <div className="flex items-center justify-center flex-col gap-3">
        <div className="flex gap-4 items-center justify-center">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="flex gap-4 md:gap-6 flex-wrap items-center justify-center">
          <p className="text-gray-900 font-bold text-md">Conditions of Use</p>
          <p className="text-gray-900 font-bold text-md">Privacy & Policy</p>
          <p className="text-gray-900 font-bold text-md">Press Room </p>
        </div>
        <p className="text-gray-400">© 2021 GameBox by Ruhul Amin Jr.</p>
      </div>
    </div>
  );
};

export default Footer;
