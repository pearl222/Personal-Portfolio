import React from "react";
import {BsToggleOn} from "react-icons/bs"

const NavBar = ({ toggle, setToggle }) => {
  const changeState = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <ul
        className={
          toggle
            ? "bg-[#353535] text-white flex flex-row justify-end fixed overflow-hidden w-full shadow-2xl p-5"
            : `flex flex-row justify-end fixed overflow-hidden bg-[#f5ebe0] w-full shadow-2xl p-5`
        }
      >
        <li className="mr-5">
          <a href="https://www.linkedin.com/in/ivonna-maturell-montalvo-a4aa8123a/">
            About Me
          </a>
        </li>
        <li className="mr-5">
          <a href="https://twitter.com/IvonnaMaturell">Social</a>
        </li>
        <li className="mr-5">
          <a href="https://github.com/pearl222">My Projects</a>
        </li>
        <li className="mr-2 cursor-pointer mt-1" onClick={changeState}>
        <BsToggleOn />

         
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
