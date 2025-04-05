import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 flex sm:flex-row flex-col gap-2 sm:justify-between items-center px-6 sm:px-20">
      <div>
        <h1 className="font-roboto tracking-wider">© 2025 Monxkeiy. All rights reserved</h1>
      </div>
      <div>
        <button className="px-4 py-2 rounded-full bg-blue-500 font-semibold tracking-wider"><a href="https://lynk.id/monxkeiy">Support me</a></button>
      </div>
    </footer>
  );
};

export default Footer;
