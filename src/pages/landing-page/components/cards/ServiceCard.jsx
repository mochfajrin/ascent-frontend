const ServiceCard = () => {
  return (
    <>
      <div className="flex space-x-10  justify-center font-montserrat">
        <div className="bg-white w-96 flex flex-col justify-between h-72 gap-3 p-6 rounded-tl-3xl rounded-lg shadow-xl hover:scale-110 ease-in-out duration-300 ">
          <img
            className="w-32 flex"
            src="./picture/Analytics.png"
            alt="map icon"
          />
          <h1 className="text-3xl font-bold pt-2  ">
            <span className="text-[#0092A4]">Belajar</span> dari Pengalaman
            Terbaik!
          </h1>
        </div>
        <div className="bg-white w-96 h-72  flex flex-col justify-between gap-3 p-6 rounded-tl-3xl rounded-lg shadow-xl hover:scale-110 ease-in-out duration-500">
          <img
            className="w-36"
            src="./picture/Project_planning.png"
            alt="volunteer icon"
          />
          <h1 className="text-3xl font-bold pt-2  ">
            <span className="text-[#0092A4]">Belajar</span> dari Praktisi
            Terbaik!
          </h1>
        </div>
        <div className="bg-white w-96  h-72 flex flex-col justify-between gap-3 p-6 rounded-tl-3xl rounded-lg shadow-xl hover:scale-110 ease-in-out duration-500">
          <img
            className="w-24 "
            src="./picture/Share_location.png"
            alt="volunteer icon"
          />
          <h1 className="text-3xl font-bold pt-2  ">
            {" "}
            <span className="text-[#0092A4]">Belajar</span> darimana saja!
          </h1>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
