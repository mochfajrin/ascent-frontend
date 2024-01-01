import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import PropTypes from "prop-types";

const CourseCard = ({ courseData }) => {
  const sliderRef = useRef(null);

  const slickSettings = {
    className: "w-[1500px] ",
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  return (
    <>
      <div className="flex items-center space-x-4 justify-center font-montserrat">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="w-12 mx-auto h-12 bg-[#0092A4] rounded-full"
        >
          <svg
            className="w-6 h-6 ml-2.5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>{" "}
        </button>
        <Slider {...slickSettings} ref={sliderRef}>
          {courseData.map((data, index) => (
            <div key={index} className="grid-cols-4">
              <div className="grid-col-4  bg-white rounded-lg w-[360px] h-[480px] mx-auto relative shadow-lg border-2 border-[#0092A4] ">
                <div className="h-72">
                  <img
                    className=" h-full rounded-t-lg w-full border-b-2 border-[#0092A4]"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className="absolute z-1 inset-0 top-[270px] ">
                  <div
                    className={`text-white mx-auto ${
                      data.courseType === "Free"
                        ? "bg-green-400"
                        : "bg-blue-400"
                    }  w-32 h-10 font-medium text-sm rounded-md text-center pt-2.5 shadow-md`}
                  >
                    {data.courseType}
                  </div>
                </div>

                <div className="px-6 mt-12 flex flex-col justify-center items-start gap-2">
                  <div className="flex items-center space-x-2 ">
                    <div>
                      <p className="text-base font-semibold">
                        {data.courseName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-yellow-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <div>
                      <p className="text-sm">{data.rating}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 font-medium">
                    <div>
                      <p>Level kelas : </p>
                    </div>
                    <div>
                      <p className="text-sm">{data.courseLevel}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 font-medium">
                    <div>
                      <p>Total modul : </p>
                    </div>
                    <div>
                      <p className="text-sm">{data.modulePerCourse} modul</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="w-12 h-12 mx-auto bg-[#0092A4] rounded-full"
        >
          <svg
            className="w-6 h-6 ml-3 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

CourseCard.propTypes = {
  courseData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      courseType: PropTypes.string.isRequired,
      courseName: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      courseLevel: PropTypes.string.isRequired,
      modulePerCourse: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CourseCard;
