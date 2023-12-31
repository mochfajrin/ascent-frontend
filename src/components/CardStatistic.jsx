import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PiUsersLight } from "react-icons/pi";
import { MdOutlineClass, MdClass } from "react-icons/md";

import { getCourseData } from "../redux/actions/courseAction";
import getUserData from "../redux/actions/userAction";

const CardStatistic = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { courseData } = useSelector((state) => state.course);
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCourseData(setLoading));
    dispatch(getUserData(setLoading));
  }, [dispatch, setLoading]);

  const activeUsersCount = Array.isArray(userData)
    ? userData.filter((member) => member.role === "member").length
    : "Belum ada user";

  const activeClassesCount = Array.isArray(courseData)
    ? courseData.length
    : "Belum ada kelas";

  const premiumClassesCount = Array.isArray(courseData)
    ? courseData.filter((course) => course.courseType === "Premium").length
    : "Belum ada kelas premium";

  return (
    <>
      <div className="flex flex-col place-items-center max-md:space-y-7 md:flex-row md:space-x-2 lg:space-x-6 xl:space-x-10 ">
        <div className="shadow-xl flex flex-row items-center space-x-5 md:space-x-3 xl:space-x-6 bg-[#C6DEC6] p-6 md:p-3 w-5/6 lg:w-4/6 xl:min-w-3/5 lg:p-4 xl:p-6  rounded-xl">
          <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
            <PiUsersLight className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl text-[#C6DEC6]" />
          </div>

          <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
            <p>{activeUsersCount}</p>
            <p className="font-bold md:font-semibold">Active Users</p>
          </div>
        </div>
        <div className="shadow-xl flex flex-row items-center space-x-5 md:space-x-3  xl:space-x-6 bg-[#D2CCA1] p-6 md:p-3 w-5/6 lg:w-4/6  xl:w-3/5 lg:p-4  xl:p-6  rounded-xl">
          <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
            <MdOutlineClass className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl  text-[#D2CCA1]" />
          </div>

          <div className="text-xl text-white md:text-sm lg:text-lg xl:text-xl">
            <p>{activeClassesCount}</p>
            <p className="font-bold">Active Class</p>
          </div>
        </div>
        <div className="shadow-xl flex flex-row items-center space-x-5 md:space-x-3   xl:space-x-6 bg-[#6B5E62] p-6 md:p-3 w-5/6 lg:w-4/6  xl:w-3/5 lg:p-4  xl:p-6  rounded-xl">
          <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
            <MdClass className="text-5xl md:text-2xl lg:text-4xl xl:text-6xl  text-[#6B5E62]" />
          </div>

          <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
            <p>{premiumClassesCount}</p>
            <p className="font-bold">Premium Class</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStatistic;
