import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiMicrosoftFill,
  RiPhpFill,
} from "react-icons/ri";
import { TbBrandLaravel } from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const icons = [
  {
    name: "HTML",
    icon: <RiHtml5Fill />,
  },
  {
    name: "CSS",
    icon: <RiCss3Fill />,
  },
  {
    name: "Javascript",
    icon: <RiJavascriptFill />,
  },
  {
    name: "PHP",
    icon: <RiPhpFill />,
  },
  {
    name: "Laravel",
    icon: <TbBrandLaravel />,
  },
  {
    name: "React",
    icon: <RiReactjsFill />,
  },
  {
    name: "Nextjs",
    icon: <RiNextjsFill />,
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Microsoft Office",
    icon: <RiMicrosoftFill />,
  },
];
const Skills = () => {
  return (
    <div className="mb-6 flex flex-col justify-center items-center mx-auto">
      <div className="h2 mb-4">My Skills</div>
      <div className="grid grid-cols-3 md:grid-cols-8 xl:grid-cols-9 items-center gap-2">
        {icons.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-green-500 shadow-md shadow-green-500 hover:shadow-white p-2 flex items-center"
            >
              <Tooltip>
                <TooltipTrigger>
                  <div className="text-4xl hover:text-accent-hover transition-all duration-500 ease-in-out">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{item.name}</TooltipContent>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
