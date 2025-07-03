"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Socials from "@/components/Socials";
// import Stats from "@/components/Stats";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center "
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col justify-center items-center xl:flex-row gap-24 w-full h-[680px]">
          {/* image dan sosials */}
          <div className="w-full h-full  hidden xl:flex xl:flex-col xl:justify-center items-center  pt-14 gap-4 max-w-[400px] relative">
            <Image
              src="/assets/about.jpg"
              alt="eep-syaiful-nurohman"
              width={200}
              height={200}
              className="w-full h-full rounded-4xl shadow-lg shadow-green-500 "
            />
            <Socials />
          </div>
          {/* bio */}
          <ScrollArea className="w-full h-[400px]">
            <div className="flex flex-col items-center xl:items-start">
              <Image
                src="/assets/about.jpg"
                alt="eep-syaiful-nurohman"
                width={200}
                height={200}
                className="max-w-sm rounded-4xl mx-auto mb-4 xl:hidden  object-cover"
              />
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Eep </span>Syaiful Nurohman
              </h2>
              <p className="max-w-[540px] mb-12">
                I am a passionate frontend website developer who loves crafting
                responsive, modern, and user-friendly interfaces. I specialize
                in building interactive web experiences using the latest
                technologies like HTML, CSS, JavaScript, and modern frameworks
                to enhance user engagement and deliver clean, efficient design
                solutions.
              </p>
              <div className="flex flex-col items-start gap-16">
                {/* <Stats /> */}
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
