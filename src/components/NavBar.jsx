import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import websiteLogo from "../assets/website-logo.png"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  const handleLogo = () => window.location.reload();
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[#C2CCEB] bg-[#0A192F] fixed cursor-pointer z-10">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2 text-[#0EC8AD]">AMT</h1> */}
        <img onClick={handleLogo} className="w-12 h-auto ml-6 mt-3"  src={websiteLogo} alt="logo" />
      </div>
      <ul className="hidden md:flex navItems">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize text-sm hover:text-[#5CEACA] hover:scale-95 duration-200 text-[#C2CCEB]"
          >
            <Link to={link} smooth duration={500}>
              <span className="px-1 text-[#5CEACA]">{id}.</span> 
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0A192F] text-[#5CEACA]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
