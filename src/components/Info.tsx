import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col  gap-6 md:gap-10">
      <div className="flex flex-col gap-4 md:flex-row bg-accent/10 p-4 rounded-md">
        <div className="flex gap-4 items-center">
          <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
          <div>
            <p className="font-bold text-lg">Address</p>
            <p>Banjarnegara, Indonesia.</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <HiOutlineMail className="text-2xl mt-1 text-accent" />
          <div>
            <p className="font-bold text-lg">Email Address</p>
            <p>es.nurohman.5@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
