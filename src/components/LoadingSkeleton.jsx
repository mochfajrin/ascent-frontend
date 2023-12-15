const LoadingSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="flex flex-col place-items-center max-md:space-y-7 md:flex-row md:space-x-2 lg:space-x-6 xl:space-x-10">
        <div className="flex flex-row items-center space-x-5 md:space-x-3 xl:space-x-6 bg-gray-300 p-6 md:p-3 w-5/6 lg:w-4/6 xl:min-w-3/5 lg:p-4 xl:p-6 rounded-xl">
          <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>

          <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="font-bold md:font-semibold">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5 md:space-x-3 xl:space-x-6 bg-gray-300 p-6 md:p-3 w-5/6 lg:w-4/6 xl:min-w-3/5 lg:p-4 xl:p-6 rounded-xl">
          <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>

          <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="font-bold md:font-semibold">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5 md:space-x-3 xl:space-x-6 bg-gray-300 p-6 md:p-3 w-5/6 lg:w-4/6 xl:min-w-3/5 lg:p-4 xl:p-6 rounded-xl">
          <div className="p-2 bg-white rounded-3xl md:rounded-2xl">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>

          <div className="text-lg text-white md:text-sm lg:text-lg xl:text-xl">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="font-bold md:font-semibold">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
          </div>
        </div>

        {/* Repeat the above structure for other sections */}
      </div>

      <div className="text-xl font-bold md:text-2xl mt-40">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSkeleton;
