import Header from "../Elements/Header";
import Paragraph from "../Elements/Paragraph";
import { Mytimeline } from "./Timeline";

export default function Introduce(props) {
  const { classname } = props;
  return (
    <div className={`${classname}`}>
      {/* <p>main content</p> */}
      <div className="flex flex-col">
        <Header classname="text-center text-primary">Siapa Saya?</Header>
        <Paragraph classname="text-center white">
          Saya adalah seorang web developer yang berdedikasi untuk terus belajar
          dan menciptakan pengalaman online yang menarik juga fungsional. Dengan
          keahlian dalam{" "}
          <span className="font-semibold text-primary">Website Developer</span>,
          saya telah berhasil mengembangkan berbagai macam website, mulai dari
          situs web pribadi hingga aplikasi web skala besar.
          <br />
          Saya memiliki minat yang besar dalam pengembangan website terutama
          dalam <span className="font-semibold text-primary">Front-End</span>.
        </Paragraph>
      </div>

      <Mytimeline />
    </div>
  );
}
