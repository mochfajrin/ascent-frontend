import Headroom from "react-headroom";
import ScrollToTop from "react-scroll-to-top";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ServiceCard from "./components/cards/ServiceCard";
import LogoFrame from "./components/LogoFrame";
import AboutUsCard from "./components/cards/AboutUsCard";
import Map from "./components/Map";
import ScrollOnTopButton from "./components/ScrollOntopButton";
import Footer from "./components/Footer";
import EventCard from "./components/cards/EventCard";

const LandingPage = () => {
  return (
    <>
      <div className=" w-full h-full ">
        <ScrollOnTopButton ScrollToTop={ScrollToTop} />
        <div className="z-10 absolute w-full">
          <Navbar />
        </div>
        <Banner />
        <div className="h-screen flex flex-col justify-center place-content-center font-montserrat bg-[#0092A4]">
          <h1 className="text-5xl font-bold text-white text-center ">
            Layanan yang dapat dinikmati!
          </h1>

          <div className="mt-20">
            <ServiceCard />
          </div>
        </div>

        <div className="flex justify-center h-screen gap-12 items-center space-x-10 font-montserrat ">
          <>
            <LogoFrame />
          </>

          <div className="mb-16">
            <h1 className="text-4xl font-bold text-[#0092A4]  ">
              Tentang kami
            </h1>
            <div className="mt-10">
              <AboutUsCard />
            </div>
          </div>
        </div>

        <div className="w-full h-screen flex flex-col justfiy-center items-center place-content-center font-montserrat gap-8 bg-[#0092A4]">
          <h1 className="text-4xl font-bold text-white text-center">
            Cabang kantor Ascent
          </h1>

          <div className="w-[66%] h-[620px]">
            <Map weight={"full"} height={"full"} zoom={13} show={false} />
          </div>
        </div>

        <div className="h-screen gap-10 flex flex-col justify-center items-center font-montserrat text-center ">
          <h1 className="text-4xl font-bold text-[#004E64]  text-center ">
            Kegiatan bersih lingkungan
          </h1>
          <div className="mx-auto">
            <EventCard />
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
