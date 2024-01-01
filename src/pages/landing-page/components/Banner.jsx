import DownloadButton from "./DownloadButton";
import "aos/dist/aos.css";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="h-full absolute w-full">
          <img
            className="object-cover w-full h-full brightness-50 "
            src="./picture/banner.jpg"
            alt="tpa image"
          />
        </div>
        <div
          data-aos="fade-right"
          className="h-full flex flex-col justify-center px-24 drop-shadow-2xl"
        >
          <h1 className="  text-white text-7xl font-extrabold ">Ascent</h1>

          <div className="w-[700px]">
            <p className="text-white text-2xl pt-2 font-medium ">
              Aplikasi revolusioner yang akan membuka pintu ke dunia pengetahuan
              tentang teknologi digital!
            </p>
          </div>

          <div className="mt-6">
            <DownloadButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
