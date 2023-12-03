import { PiUsersLight } from "react-icons/pi";
import { MdOutlineClass, MdClass } from "react-icons/md";

const CardStatistic = () => {
  return (
    <div className="flex flex-col place-items-center max-md:space-y-7 md:flex-row md:space-x-2 md:mr-4 ">
      <div className="flex flex-row items-center space-x-5 md:space-x-3 bg-[#489CFF] p-6 md:p-3 w-5/6 rounded-xl">
        <div className="bg-white rounded-3xl p-2 md:rounded-2xl">
          <PiUsersLight className="text-5xl md:text-2xl text-[#489CFF]" />
        </div>

        <div className="text-lg md:text-sm text-white">
          <p>450</p>
          <p className="font-bold md:font-semibold">Active Users</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-5 md:space-x-3 bg-[#73CA5C] p-6 md:p-3 w-5/6 rounded-xl">
        <div className="bg-white rounded-3xl p-2 md:rounded-2xl">
          <MdOutlineClass className="text-5xl md:text-2xl  text-[#73CA5C]" />
        </div>

        <div className="text-lg md:text-sm text-white">
          <p>450</p>
          <p className="font-bold">Active Class</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-5 md:space-x-3 bg-[#6148FF] p-6 md:p-3 w-5/6 rounded-xl">
        <div className="bg-white rounded-3xl p-2 md:rounded-2xl">
          <MdClass className="text-5xl md:text-2xl  text-[#6148FF]" />
        </div>

        <div className="text-lg md:text-sm text-white">
          <p>450</p>
          <p className="font-bold">Premium Class</p>
        </div>
      </div>
    </div>
  );
};

export default CardStatistic;
