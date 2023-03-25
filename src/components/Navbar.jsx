import { useState } from "react";
import { iconClose, iconHamburger } from "../assets";
import logo from "../assets/logo.svg";
import { navLinks } from "../data";
import GetStarted from "./GetStarted";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" relative container mx-auto p-6 ">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="" />
        </div>
        <div className=" hidden  md:flex space-x-6">
          {navLinks.map((links) => (
            <a href="#" key={links.id} className="transition hover:text-darkGrayishBlue">
              {links.title}
            </a>
          ))}
        </div>
        <GetStarted styles="hidden md:block text-white" />
         {/* Hamburger Icon */}
         <div className="block md:hidden focus:outline-none">
            <img onClick={() => setToggle(prev => !prev)} src={toggle ? iconClose : iconHamburger} alt="" />
         </div>
         <div className={`${toggle ? "flex" : "hidden"} bg-white rounded-md p-6 absolute top-24 right-3 shadow-lg z-20 md:hidden`}>
          <div className=" text-darkGrayishBlue flex flex-col space-y-5 item-center w-[300px] text-center p-6">
            {navLinks.map((nav) => (
              <a key={nav.id} className="">
                <a href="#">{nav.title}</a>
              </a>
            ))}
          </div>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
