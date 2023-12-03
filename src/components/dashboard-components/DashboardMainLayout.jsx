import { Outlet } from "react-router-dom";

import NavbarDasboard from "./NavbarDashboard";
import SideBar from "./SideBar";

const DashboardMainLayout = () => {
  return (
    <div className="font-montserrat">
      <NavbarDasboard />
      <div className="max-md:hidden ">
        <SideBar />
      </div>
      <div className="pt-24  md:ml-44">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMainLayout;
