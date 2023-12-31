import ListBar from "./ListBar";

const SideBar = () => {
  return (
    <aside className="fixed w-40 lg:w-48 xl:w-60  h-screen bg-[#FFF] shadow-xl z-10  flex flex-col space-y-10">
      <div className="flex justify-center mt-6 ">
        <img className=" w-36 " src="/Logo_2.png" alt="" />
      </div>
      <ListBar />
    </aside>
  );
};

export default SideBar;
