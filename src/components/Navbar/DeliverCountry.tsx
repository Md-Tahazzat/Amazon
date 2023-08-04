import { FaLocationDot } from "react-icons/fa6";

const DeliverCountry = () => {
  return (
    <div className="text-white hidden md:flex hover-border py-1 items-center gap-1 ml-3">
      <FaLocationDot />
      <p className="flex flex-col items-left justify-center ">
        <span className="text-slate-100 text-[13px] -mb-2">Deliver to</span>
        <span className="font-semibold text-[15px]">Bangladesh</span>
      </p>
    </div>
  );
};

export default DeliverCountry;
