import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aswinmalla/",
      style: "rounded-full",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/amt98",
      style: "rounded-full",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto: aswinmalla12@gmail.com",
      style: "rounded-full",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-full",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[10%] left-0 fixed">
      <ul>
        {links.map(({ child, href, id, link, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-17 h-14 px-4 ml-[30px] hover:scale-105 mb-2 hover:rounded-full duration-300 bg-gradient-to-r from-[#00CDAE] to-[#00CCAF] " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-[#0A192F] font-bold "
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
