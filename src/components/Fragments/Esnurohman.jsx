import Button from "../Elements/Button";
import Sosmed from "../Elements/Sosmed";
export default function Esnurohman() {
  return (
    <div className="flex flex-col items-center justify-center p-4 ">
      <img
        src="/img/me.jpg"
        alt="Esnurohman"
        className="shadow-2xl rounded-xl md:w-80 md:h-96 shadow-primary"
      />
      <h1 className="mt-6 text-center">
        Hi, I'm{" "}
        <span className="text-2xl font-bold text-primary ">
          Eep Syaiful Nurohman
        </span>
      </h1>
      <p className="mb-2">Website Developer</p>
      <Sosmed />
      <div className="flex gap-2 mt-4 ">
        <Button link="#projects">My Project</Button>
        {/* <a
          href="#"
          // target="_blank"
          className="px-4 py-1 text-xs transition-all duration-1000 border rounded-md shadow-md md:text-base hover:scale-95 hover:text-primary hover:border-primary"
        >
          My Resume
        </a> */}
      </div>
    </div>
  );
}
