import Introduce from "./Fragments/Introduce";
import Expertise from "./Fragments/Expertise";
import Projects from "./Fragments/Projects";
export default function Content() {
  return (
    <main className="h-full p-4 md:w-8/12 md:overflow-y-auto no-scrollbar font-roboto">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Introduce classname="flex flex-col items-center justify-center min-h-screen gap-2 md:flex-row" />
        <Expertise />
        <Projects />
      </div>
    </main>
  );
}
