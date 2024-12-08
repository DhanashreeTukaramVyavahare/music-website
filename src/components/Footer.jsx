import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white text-center p-4">
      &copy; {new Date().getFullYear()} Music Player App
    </footer>
  );
};

export default Footer;
