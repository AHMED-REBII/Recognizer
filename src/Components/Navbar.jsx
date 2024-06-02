import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  let Links = [
    { name: "Documentation", Link: "/" },
    { name: "How it Work", Link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-white pt-2 ">
          <span className="w-16 h-16 mr-2 pt-2">
            <img src={Logo} />
          </span>
          Recognizer
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-10 cursor-pointer md:hidden text-white  "
        >
          {open ? <IoCloseSharp /> : <IoMenu />}
        </div>
        <ul className={`md:flex md:items-center mr-20 md:pb-0 pb-12 absolute md:static ${open ? "top-20" : "top-[-490px]" }`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-20 text-xl md:my-0 my-7 ">
              <a
                href={link.Link}
                className="text-white font-semibold hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
