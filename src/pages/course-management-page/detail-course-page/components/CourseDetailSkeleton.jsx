const CourseDetailSkeleton = () => {
  return (
    <>
      <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

      <div className="flex flex-row items-center justify-between animate-pulse bg-white w-full p-6 rounded-lg shadow-xl  ">
        <div className="space-y-8 w-96">
          <div>
            <div className="animate-pulse h-8 w-3/4 mb-4 bg-gray-300 rounded"></div>
            <div className="animate-pulse h-8 w-1/2 bg-gray-300 rounded"></div>
          </div>
          <div className="mt-3">
            <div className="animate-pulse h-48 w-full bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-96">
            <div className="animate-pulse h-6 w-1/2 mb-2 bg-gray-300 rounded"></div>
            <div className="animate-pulse h-24 w-full bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="animate-pulse h-48 w-[900px] bg-gray-300 rounded-lg"></div>
      </div>
    </>
  );
};

export default CourseDetailSkeleton;
