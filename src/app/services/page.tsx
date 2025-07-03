"use client";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import { CgWebsite } from "react-icons/cg";
import { FiLayers } from "react-icons/fi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    thumbnail: (
      <FiLayers className="w-8 h-8 text-green-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000 ease-in-out delay-200" />
    ),
    service: "Fullstack Website Developer",
    techstack: "Laravel, TailwindCSS, MySql",
  },
  {
    thumbnail: (
      <CgWebsite className="w-8 h-8 text-green-500  group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000 ease-in-out delay-200" />
    ),
    service: "Frontend Website Developer",
    techstack: "NextJS, TailwindCSS",
  },
  // {
  //   thumbnail: "/assets/services/backend.svg",
  //   service: "3. Fullstack Laravel Website Developer",
  // },
  // {
  //   thumbnail: "/assets/services/backend.svg",
  //   service: "4. Fullstack Laravel Website Developer",
  // },
  // {
  //   thumbnail: "/assets/services/backend.svg",
  //   service: "5. Fullstack Laravel Website Developer",
  // },
  // {
  //   thumbnail: "/assets/services/backend.svg",
  //   service: "6. Fullstack Laravel Website Developer",
  // },
];
const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center h-screen"
    >
      <div className="container  mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flew-row justify-between items-start    gap-8">
          <h2 className="h2 max-2-[480px] text-left xl:mb-0">
            Your{" "}
            <TypeAnimation
              sequence={["Website", 3000, "Success", 2000]}
              wrapper="span"
              speed={40}
              className=" text-accent "
              repeat={Infinity}
              cursor={false}
            />
            .
            <br />
            We implement & build your idea.
          </h2>
          {/* <button>button</button> */}
        </div>
        {/* slider */}
        <Carousel>
          <CarouselContent>
            {services.map((item, index) => {
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col gap-8 border  p-4 rounded-md h-[204px] max px-8 justify-between hover:bg-accent/10  hover:shadow-sm hover:shadow-green-500 group">
                    <div>
                      {/* <Image
                        src={item.thumbnail}
                        alt={item.service}
                        width={48}
                        height={48}
                      /> */}
                      <div>{item.thumbnail}</div>
                      <h3 className="mt-4">{item.service}</h3>
                      <p className="text-sm font-light">
                        TechStack:{" "}
                        <span className="font-semibold group-hover:text-green-500">
                          {item.techstack}
                        </span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-scroll h-[70%]">
          {services.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col gap-8 border  p-4 rounded-md h-[284px] w-full px-8 justify-between hover:bg-white hover:text-black hover:shadow-sm hover:shadow-green-500 ">
                  <div>
                    <Image
                      src={item.thumbnail}
                      alt="eep-syaiful-nurohman"
                      width={48}
                      height={48}
                    />
                    <h3 className="">{item.service}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* <div className="flex justify-center items-center">
          <div className="container mx-auto flex flex-col gap-16">
          </div>
        </div> */}
      </div>
    </motion.section>
  );
};

export default Services;
