import React from "react";

const Footer = () => {
  const link = "https://henok.us";
  const target = "_blank";

  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-lg">
          &copy; <small>{new Date().getFullYear()}</small> Mello x ABC
        </p>
        <p>
          <a href={link} target={target} className="text-blue-300 hover:text-blue-500">
            Visit Mello x ABC
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
