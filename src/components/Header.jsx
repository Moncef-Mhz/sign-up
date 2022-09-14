import React from "react";

const Header = () => {
  return (
    <div className="w-full absolute flex items-center py-4 px-8">
      <h1 className="font-bold text-2xl text-white mr-10 ">
        Moon<span className="text-accents text-3xl">.</span>
      </h1>
      <ul className="flex items-center gap-6 ">
        <li>
          <a href="#" className="text-white font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-medium ">
            Join
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
