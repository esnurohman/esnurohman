import CountUp from "react-countup";

const Stats = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={12} duration={5} delay={2} className="block w-[60px]" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
