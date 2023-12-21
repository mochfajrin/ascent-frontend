import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "./components/MainLayout";
import Home from "./pages/home-page/Home";
import CourseManagement from "./pages/course-management-page/CourseManagement";
import LoginPage from "./pages/login-pages/Login";
import DetailCoursePage from "./pages/course-management-page/detail-course-page/DetailCoursePage";
import store from "./redux/store";
import AddCoursePage from "./pages/course-management-page/add-course-page/AddCoursePage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="course-management">
              <Route index={true} element={<CourseManagement />} />
              <Route path={":id"} element={<DetailCoursePage />} />
              <Route path={"delete/:id"} element={<CourseManagement />} />
              <Route path={"add-course"} element={<AddCoursePage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
