const studies = [
  {
    title: "Social Sciences",
    institution: "SMA Negeri 1 Purwareja Klampok",
    year: "2015 - 2018",
  },
  {
    title: "Informatics (GPA 3.63)",
    institution: "Universitas Amikom Purwokerto",
    year: "2018 - 2025",
  },
];

const exp = [
  {
    job: "Content Writer",
    institution: "Teknoinside.com",
    year: "2023",
  },
  {
    job: "Fullstack Website Developer",
    institution: "Final Project - Universitas Amikom Purwokerto",
    year: "2024 - 2025",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col ">
      <div>
        {/* Education */}
        <h2 className="h2 mb-2 ">Education</h2>
        <div className="">
          {studies
            .slice()
            .reverse()
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="mb-2 border-l-2 border-green-500  p-2"
                >
                  <div className="flex md:gap-2 flex-col md:flex-row  md:items-center ">
                    <p className="font-extrabold text-accent ">{item.title}</p>
                    <p>{item.year}</p>
                  </div>
                  <p className="text-lg ">{item.institution}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        {/* experience */}
        <h2 className="h2 mb-2 ">Experience</h2>
        <div className="">
          {exp
            .slice()
            .reverse()
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="mb-2 border-l-2 border-green-500  p-2"
                >
                  <div className="flex md:gap-2  flex-col md:flex-row  md:items-center ">
                    <p className="font-extrabold text-accent ">{item.job}</p>
                    <p>{item.year}</p>
                  </div>
                  <p className="text-lg ">{item.institution}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Journey;
