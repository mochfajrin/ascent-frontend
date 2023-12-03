import ListBar from "./ListBar";

const SideBar = () => {
  return (
    <aside className="fixed w-40 h-screen bg-[#6148FF] z-10  flex flex-col">
      <div className="flex justify-center">
        <img className="w-32 h-32 " src="/logo-course.svg" alt="" />
      </div>
      <ListBar />
    </aside>
  );
};

export default SideBar;
