const LoadingSkeletonChapter = () => {
  return (
    <>
      <div className=" max-md:ml-8 w-full mt-16">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
        <div className="flex flex-row space-x-3 justify-end ">
          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
        </div>
        <div className="h-screen bg-gray-200  dark:bg-gray-700 w-full mb-4"></div>
      </div>
    </>
  );
};

export default LoadingSkeletonChapter;
