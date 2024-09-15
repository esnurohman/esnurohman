import Header from "../Elements/Header";
import Paragraph from "../Elements/Paragraph";

export default function Expertise() {
  return (
    <div>
      <Header classname="text-center text-primary">Keahlian</Header>
      <Paragraph classname="font-thin text-center">
        Terus belajar untuk menambahkan keahlian saya dibidang web developer
      </Paragraph>
      <div className="grid grid-cols-3 gap-4 my-4">
        <svg
          class="w-24 h-24 text-orange-500 mx-auto transition-all duration-300 hover:scale-125"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
        </svg>
        <svg
          class="w-24 h-24 text-blue-400 mx-auto transition-all duration-300 hover:scale-125"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
        </svg>

        <img
          src="/img/TailwindCSS.png"
          alt="TailwindCSS"
          className="w-24 mx-auto transition-all duration-300 hover:scale-125"
        />
        <img
          src="/img/react.png"
          alt="React"
          className="w-24 mx-auto transition-all duration-300 hover:scale-125"
        />
        <img
          src="/img/laravel.png"
          alt="Laravel"
          className="w-24 mx-auto transition-all duration-300 hover:scale-125"
        />
        {/* <img src="/img/react.png" alt="" className="w-32" /> */}
      </div>
      {/* <table className="w-full text-sm text-left text-secondary ">
        <thead className="text-xs uppercase text-secondary bg-darkprimary ">
          <tr>
            <th scope="col" className="px-6 py-3">
              FrontEnd
            </th>
            <th scope="col" className="px-6 py-3">
              FullStack
            </th>
            <th scope="col" className="px-6 py-3">
              Database
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t bg-darkprimary ">
            <th
              scope="row"
              className="flex px-6 py-4 font-medium text-secondary whitespace-nowrap"
            >
              <img
                src="/img/TailwindCSS.png"
                alt="TailwindCSS"
                className="w-10"
              />
              <img src="/img/react.png" alt="React" className="w-10" />
            </th>
            <td className="px-6 py-4">
              <img src="/img/laravel.png" alt="Laravel" className="w-10" />
            </td>
            <td className="px-6 py-4">MySql</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
