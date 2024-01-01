import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ServiceCard from "./components/cards/ServiceCard";
import LogoFrame from "./components/LogoFrame";
import AboutUsCard from "./components/cards/AboutUsCard";
import Map from "./components/Map";
import ScrollOnTopButton from "./components/ScrollOntopButton";
import Footer from "./components/Footer";
import CourseCard from "./components/cards/CourseCard";
import { getCourseData } from "../../redux/actions/courseAction";
import LoadingPage from "./loading-page/LoadingPage";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { courseData } = useSelector((state) => state.course);

  useEffect(() => {
    AOS.init({ duration: 600 });
    dispatch(getCourseData(setLoading));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className=" w-full h-full ">
          <ScrollOnTopButton ScrollToTop={ScrollToTop} />
          <div className="z-10 absolute w-full">
            <Navbar />
          </div>
          <Banner />
          <div
            id="service"
            className="h-screen flex flex-col justify-center place-content-center font-montserrat bg-[#0092A4]"
          >
            <h1 className="text-5xl font-bold text-white text-center ">
              keuntungan mengikuti kelas Ascent!
            </h1>

            <div className="mt-20">
              <ServiceCard />
            </div>
          </div>

          <div
            id="aboutUs"
            className="flex justify-center h-screen gap-12 items-center space-x-10 font-montserrat "
          >
            <>
              <LogoFrame />
            </>

            <div className="mb-16">
              <h1 className="text-5xl font-bold text-[#0092A4]  ">
                Tentang kami
              </h1>
              <div className="mt-10">
                <AboutUsCard />
              </div>
            </div>
          </div>

          <div className="w-full h-screen flex flex-col justfiy-center items-center place-content-center font-montserrat gap-8 bg-[#0092A4]">
            <h1 className="text-5xl font-bold text-white text-center">
              Cabang kantor Ascent
            </h1>

            <div className="w-[66%] h-[620px]">
              <Map weight={"full"} height={"full"} zoom={5} show={false} />
            </div>
          </div>

          <div className="h-screen gap-10 flex flex-col justify-center items-center font-montserrat text-center ">
            <h1 className="text-5xl font-bold text-[#0092A4]  text-center ">
              Kelas yang tersedia
            </h1>
            <div className="mx-auto">
              <CourseCard courseData={courseData} />
            </div>
          </div>

          <div id="contact">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
