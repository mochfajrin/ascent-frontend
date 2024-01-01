import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect, useState } from "react";

// import { getEventData } from "../../../api/fetching";
// import api from "../../../api/api";

const EventCard = () => {
  const sliderRef = useRef(null);
  const [event, setEvent] = useState([]);

  const slickSettings = {
    className: "w-[1500px] ",
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  // useEffect(() => {
  //   getEventData()
  //     .then((res) => {
  //       setEvent(res);
  //     })
  //     .catch((err) => {
  //       throw new Error(err.message);
  //     });
  // }, []);
  // useEffect(() => {
  //   api
  //     .get(`/event`, {
  //       params: {
  //         withTPS: true,
  //         withImages: true,
  //       },
  //     })
  //     .then((res) => {
  //       setEvent(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }, []);

  console.log(event);

  // if (event.length === 0) {
  //   return;
  // }
  const dummy = [
    {
      url: "./assets/dome.jpg",
      lokasi: "jalan",
      tanggal: "13-03-2024",
      kuota: 5,
    },
    {
      url: "./assets/krb.png",
      lokasi: "Kebun",
      tanggal: "13-03-2023",
      kuota: 20,
    },
    {
      url: "./assets/pantai-manggar.png",
      lokasi: "Pantai",
      tanggal: "13-03-2023",
      kuota: 5,
    },
    {
      url: "./assets/dome.jpg",
      lokasi: "BSCC",
      tanggal: "13-03-2026",
      kuota: 30,
    },
    {
      url: "./assets/krb.png",
      lokasi: "Kebun",
      tanggal: "13-03-2025",
      kuota: 10,
    },
  ];

  return (
    <>
      <div className="flex items-center space-x-4 justify-center font-montserrat">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="w-10 h-10 bg-white rounded-full"
        >
          <img className="ml-0.5 w-8" src="./icons/left.png" alt="" />
        </button>
        <Slider {...slickSettings} ref={sliderRef}>
          {dummy.map((data, index) => (
            <div key={index} className="grid-cols-4">
              <div className="grid-col-4  bg-white rounded-lg w-[360px] h-[480px] mx-auto relative shadow-sm border-2 border-[#7AE582] ">
                <img
                  className="rounded-t-lg"
                  src="images/dummy-data-event-poster.jpg"
                  alt=""
                />
                <div className="absolute z-1 inset-0 top-[215px] ">
                  <div className="text-white mx-auto bg-[#7AE582] w-32 h-10 font-medium text-sm rounded-md text-center pt-2.5 shadow-md">
                    Berjalan
                  </div>
                </div>

                <div className="px-8 mt-14 flex flex-col justify-center items-start gap-5">
                  <div className="flex items-center space-x-2 ">
                    <img className="w-8" src="./icons/location.png" alt="" />

                    <div>
                      <p className="text-sm">{data.lokasi}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img className="w-8" src="./icons/calendar.png" alt="" />

                    <div>
                      <p className="text-sm">{data.tanggal}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img className="w-9" src="./icons/people.png" alt="" />

                    <div>
                      <p className="text-sm">{data.kuota} Orang</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <Slider {...slickSettings} ref={sliderRef}>
          {event.map((data, index) => (
            <div key={index}>
              <div className="bg-white rounded-lg w-[360px] h-[480px] mx-auto relative shadow-sm border-2 border-[#7AE582] ">
                <img
                  className="rounded-t-lg"
                  src={`http:///10.1.30.90:5000/${
                    data.event_images[0]?.path.split("public\\")[1]
                  }`}
                  alt=""
                />
                <div className="absolute z-1 inset-0 top-[215px] ">
                  <div className="text-white mx-auto bg-[#7AE582] w-32 h-10 font-medium text-sm rounded-md text-center pt-2.5 shadow-md">
                    Berjalan
                  </div>
                </div>

                <div className="px-8 mt-14 flex flex-col justify-center items-start gap-5">
                  <div className="flex items-center space-x-2 ">
                    <img className="w-8" src="./icons/location.png" alt="" />

                    <div>
                      <p className="text-sm">Lokasi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img className="w-8" src="./icons/calendar.png" alt="" />

                    <div>
                      <p className="text-sm">Tanggal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img className="w-9" src="./icons/people.png" alt="" />

                    <div>
                      <p className="text-sm">2 Orang</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="w-10 h-10 bg-white rounded-full"
        >
          <img className="ml-1 w-8" src="./icons/right.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default EventCard;
