import Link from "next/link";
import React from "react";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";

const Navbar = () => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/aman-kushwaha-939b73209/",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/Amanksh",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/aman-kushwaha-939b73209/",
      label: "Leetcode",
      icon: SiLeetcode,
    },
  ];

  return (
    <nav className="py-10 w-[80%] mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-[#00e0ff] -rotate-2">
        Aman👨🏼‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-6 h-6 hover:scale-125 transition-all " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
