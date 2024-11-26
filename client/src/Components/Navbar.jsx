import React from "react";

const Navbar = () => {
  return (
    <div className="font-title md:pt-8 pt-2 bg-pink-500 h-28 w-full">
      <div className="flex justify-between px-20 items-center gap-10">
        <span className="font-bold md:text-4xl text-4xl">ChatSync</span>

        <div className="block md:hidden "></div>
      </div>
    </div>
  );
};

export default Navbar;
