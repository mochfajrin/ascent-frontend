import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Home from "./pages/home-page/Home";
import CourseManagement from "./pages/course-management-page/CourseManagement";
import LoginPage from "./pages/login-pages/Login";
import DetailCoursePage from "./pages/course-management-page/detail-course-page/DetailCoursePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="course-management">
            <Route index={true} element={<CourseManagement />} />
            <Route path={":id"} element={<DetailCoursePage />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
