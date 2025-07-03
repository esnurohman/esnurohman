"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward, MdEmail } from "react-icons/md";
// components
import Blob from "@/components/Blob";
import Image from "next/image";

// assets
import avatarImg from "../../public/assets/avatar.png";
import Link from "next/link";
import Pattern from "@/components/Pattern";
import Socials from "@/components/Socials";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      {/* pattern */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1">
            Hi i&apos;m Eep, <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "Frontend Developer", 2000]}
              wrapper="span"
              speed={40}
              className=" text-accent "
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[480px] mb-[44px]">
            I&apos;m a web developer based in Indonesia. I have a passion for
            creating beautiful and functional websites.
          </p>
          <div className="btn btn-lg btn-accent ">
            <Link href="/services">
              <div className="flex items-center gap-2">
                <span>My Services</span>
                <MdArrowOutward className="" />
              </div>
            </Link>
          </div>
          {/* contact info */}
          <div className="mt-4 ">
            {/* email */}

            <div className="flex items-center gap-2 mb-2 ">
              <MdEmail className="text-accent" />
              <span>es.nurohman.5@gmail.com</span>
            </div>

            {/* sosmed */}
            <Socials />
          </div>
        </div>
        {/* blob dan image */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyle="w-[560px] h-[560px]" />
          {/* avatar img */}
          <Image
            src={avatarImg}
            alt="avatar"
            width={440}
            height={600}
            quality={100}
            className="absolute -top-16 left-[120px] hover:scale-95 transition-all duration-1000 ease-in-out"
          />
          {/* overlay gradient */}
          <div className="w-full h-[144px]  absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/20"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
