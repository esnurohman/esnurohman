import Button from "../Elements/Button";
import Header from "../Elements/Header";
import Paragraph from "../Elements/Paragraph";

const projects = [
  {
    id: 1,
    name: "Sawah",
    type: "Website FrontEnd",
    img: "/img/sawah/sawah.png",
    description:
      "Tampilan website statis sederhana tentang pertanian. Menggunakan HTML dan CSS.",
    tech: "HTML, CSS",
    link: "https://github.com/esnurohman/sawah-html-css",
  },
  {
    id: 2,
    name: "Esports Arena Community",
    type: "Website FullStack",
    img: "/img/eac/eac1.png",
    description:
      "Website dinamis yang berisi informasi tentang kegiatan kompetisi esports yang diselengarakan oleh Esports Arena Community. Menggunakan bahasa pemrograman PHP dan MySQL.",
    tech: "Laravel, TailwindCSS, MySql",
    link: "#",
  },
];
export default function Projects() {
  return (
    <div id="projects" className="p-4 mb-10">
      <Header classname="mt-10 text-center text-primary">Portfolio</Header>
      <Paragraph classname="mb-4 font-thin text-center">
        Hasil belajar yang telah saya tempuh
      </Paragraph>

      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 mb-4 text-base border-2 rounded-lg border-primary"
          >
            <img src={project.img} alt={project.name} className="rounded-lg" />
            <h1 className="mt-6 text-2xl font-bold text-center text-primary">
              {project.name}
            </h1>
            <p className="text-base font-thin text-center text-white">
              ({project.type})
            </p>
            <p className="mb-4 font-thin text-center">{project.tech}</p>
            <p className="mb-4">{project.description}</p>
            <div className="flex justify-center">
              <Button link={project.link} target="_blank">
                Lihat Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
