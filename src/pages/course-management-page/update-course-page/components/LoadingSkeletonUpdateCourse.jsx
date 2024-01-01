const LoadingSkeletonUpdateCourse = () => {
  return (
    <>
      <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

      <div className="flex flex-row justify-between space-x-16 mt-10 text-base bg-white w-full p-6 rounded-lg shadow-lg">
        <form className="w-full">
          {/* ... other form fields ... */}

          {/* Skeleton Loading Effect */}
          <div className="animate-pulse">
            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-28 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
            </div>

            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-16 w-full rounded-lg"></div>
            </div>
            {/* ... other skeleton loading fields ... */}
          </div>
        </form>
        <form className="w-full">
          {/* ... other form fields ... */}

          {/* Skeleton Loading Effect */}
          <div className="animate-pulse">
            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
            </div>
            {/* ... other skeleton loading fields ... */}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoadingSkeletonUpdateCourse;
