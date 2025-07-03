"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const latestProjects = [
  {
    id: 1,
    categories: "Fullstack",
    title: "Esports Arena Community",
    description:
      "APLIKASI PENDAFTARAN KOMPETISI GAME ONLINE untuk tugas akhir kuliah",

    techstack: ["Laravel", "TailwindCSS", "MySql"],
    link: {
      github: "#",
      demo: "https://eprints.amikompurwokerto.ac.id/id/eprint/2729/",
    },
    image: "/assets/work/eac/thumbnail.png",
  },
  {
    id: 2,
    categories: "Frontend",
    title: "Sawah",
    description: "Belajar menerapkan HTML, CSS sederhana",

    techstack: ["HTML", "CSS"],
    link: {
      github: "https://github.com/esnurohman/sawah-html-css",
      demo: "https://sawah-esn.vercel.app",
    },
    image: "/assets/work/sawah/thumbnail.png",
  },
  {
    id: 3,
    categories: "Frontend",
    title: "Sederhana",
    description: "Membuat antarmuka mainstream",

    techstack: ["Nextjs", "TailwindCSS"],
    link: {
      github: "https://github.com/esnurohman/fe-sederhana",
      demo: "https://sederhana-landingpage.vercel.app",
    },
    image: "/assets/work/sederhana/thumbnail.png",
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col justify-center items-center xl:flex-row gap-24 w-full h-[680px]">
          <ScrollArea className="w-full h-[400px] xl:h-[600px]">
            <div className="h2 my-6">
              My <span className="text-accent">Projects</span>
            </div>
            <div className="w-full">
              {latestProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col-reverse md:flex-row gap-4 w-full border-b-2 border-green-500 mb-8  md:justify-evenly  items-center
                  "
                >
                  <div className="flex flex-col gap-1 items-center mb-4 ">
                    <div className="h4">{project.title}</div>
                    <div>{project.categories}</div>
                    <div className="grid  grid-cols-2 gap-2 font-light text-sm">
                      {project.techstack.map((tech) => {
                        return (
                          <div
                            key={tech}
                            className="bg-white/10 rounded-xl px-2 "
                          >
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                    <div>{project.description}</div>
                    <div className="flex gap-4">
                      <div className="btn btn-accent px-2">
                        <Link href={project.link.github}>
                          <div className="flex items-center gap-2">
                            <FaGithub />
                            <span>Github</span>
                          </div>
                        </Link>
                      </div>
                      <div className="flex items-center justify-center rounded-xl hover:shadow-lg hover:border-b-2  border-green-500 hover:shadow-green-500 cursor-pointer transition-all font-medium h-[56px]  text-white px-2">
                        <Link href={project.link.demo}>
                          <div className="flex items-center gap-2">
                            <FaExternalLinkAlt />
                            <span>Demo</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-sm p-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={480}
                      height={360}
                      className="w-full h-full rounded-4xl shadow-md shadow-green-500 "
                    />
                  </div>
                </div>
              ))}
              {/* <div className="flex flex-col-reverse md:flex-row gap-4 w-full border md:justify-center h-[250px] items-center">
                <div className="flex flex-col gap-4 justify-start md:justify-center  items-center">
                  deskripsi
                </div>
                <div className="max-w-sm">
                  <Image
                    src="/assets/work/thumb1.png"
                    alt="eep-syaiful-nurohman"
                    width={200}
                    height={200}
                    className="w-full h-full rounded-4xl shadow-lg shadow-green-500 "
                  />
                </div>
              </div> */}
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
