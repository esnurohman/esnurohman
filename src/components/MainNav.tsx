import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const MainNav = () => {
  return (
    <nav className="flex justify-between py-4 items-center flex-col mx-auto">
      <Logo />
      <NavLinks containerStyles="flex flex-col gap-5" />
      <div className="h-40"></div>
    </nav>
  );
};

export default MainNav;
