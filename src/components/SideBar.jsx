import ListBar from "./ListBar";

const SideBar = () => {
  return (
    <aside className="fixed w-40 lg:w-48 xl:w-60 h-screen bg-[#DCE0E8] z-10  flex flex-col">
      <div className="flex justify-center">
        <img className="w-32 h-32 lg:w-40 lg:h-40 " src="/Logo_2.png" alt="" />
      </div>
      <ListBar />
    </aside>
  );
};

export default SideBar;
