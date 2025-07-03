import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-1 justify-center xl:justify-start items-center">
      <Link href="https://www.linkedin.com/in/esnurohman/">
        <FaLinkedin className="w-6 h-6 hover:text-accent-hover transition-all duration-1000 ease-in-out delay-200" />
      </Link>
      <Link href="https://github.com/esnurohman">
        <FaGithub className="w-6 h-6 hover:text-accent-hover transition-all duration-1000 ease-in-out delay-200" />
      </Link>
    </div>
  );
};

export default Socials;
