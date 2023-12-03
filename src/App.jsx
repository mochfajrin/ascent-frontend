import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardMainLayout from "./components/dashboard-components/DashboardMainLayout";

import "./App.css";
import Home from "./pages/admin-page/dashboard-pages/Home";
import CourseManagement from "./pages/admin-page/dashboard-pages/CourseManagement";
import MemberManagement from "./pages/admin-page/dashboard-pages/MemberManagement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"></Route>
        <Route path="/dashboard" element={<DashboardMainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="class-management">
            <Route index={true} element={<CourseManagement />} />
          </Route>
          <Route path="member-management">
            <Route index={true} element={<MemberManagement />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
