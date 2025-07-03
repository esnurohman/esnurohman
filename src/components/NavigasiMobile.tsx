"use client";
import Link from "next/link";
import { FaHome, FaListOl, FaUser } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";
// import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "About",
    path: "/about",
    icon: <FaUser />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <FaFileCircleCheck />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <FaListOl />,
  },
  // {
  //   name: "Contact",
  //   path: "/contact",
  //   icon: <MdOutlineConnectWithoutContact />,
  // },
];

const NavigasiMobile = () => {
  const pathname = usePathname();
  return (
    <div className="fixed grid grid-cols-4 md:hidden gap-4 bottom-0 left-0 right-0  text-white w-full rounded-t-4xl border-t border-green-500 bg-accent/40 mx-auto py-3 inset-shadow-sm inset-shadow-green-500">
      {menu.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <div key={index} className="text-xs w-6 h-6 cursor-pointer mx-auto ">
            <Link
              href={item.path}
              className={`flex items-center justify-center flex-col hover:scale-75 hover:text-slate-500 transition-all duration-300 ease-in-out delay-200 ${
                isActive && `scale-125 text-green-500`
              } `}
            >
              <div>{item.icon}</div>
              <span>{item.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavigasiMobile;
