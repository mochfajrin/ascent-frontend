const DownloadButton = () => {
  return (
    <>
      <button
        type="button"
        className="text-white bg-green-400 border border-gray-300 focus:outline-none 
          hover:bg-green-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-2xl px-5 py-2.5 me-2 mb-2 w-[250px]"
      >
        <div className="flex flex-row space-x-3">
          <img className="w-12" src="./icons/swagger-icon.png" alt="" />
          <a href="https://ascent-mooc-api.mochfajrin.my.id/api-docs/">
            <p className="text-sm text-left"> Lihat Dokumentasi</p>
            <p className="font-bold">Swagger</p>
          </a>
        </div>
      </button>
    </>
  );
};

export default DownloadButton;
