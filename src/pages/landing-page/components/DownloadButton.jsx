const DownloadButton = () => {
  return (
    <>
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none 
        hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-2xl px-5 py-2.5 me-2 mb-2 w-[250px]"
      >
        <div className="flex flex-row space-x-3">
          <img className="w-12" src="./icons/google-play.png" alt="" />

          <div className=" ">
            <p className="text-sm text-left"> Unduh pada</p>
            <p className="font-bold">Google Play</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default DownloadButton;
