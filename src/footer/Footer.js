import React from "react";

const Footer = ({ toggle }) => {
  return (
    <div
      className={
        toggle
          ? "flex flex-row justify-center bg-[#353535] text-white p-1"
          : "flex flex-row justify-center bg-[#f5ebe0] p-1"
      }
    >
      <h1>2023</h1>
    </div>
  );
};

export default Footer;
