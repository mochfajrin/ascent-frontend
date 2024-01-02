import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "./components/MainLayout";
import Home from "./pages/home-page/Home";
import CourseManagement from "./pages/course-management-page/CourseManagement";
import LoginPage from "./pages/login-pages/Login";
import DetailCoursePage from "./pages/course-management-page/detail-course-page/DetailCoursePage";
import store from "./redux/store";
import AddCoursePage from "./pages/course-management-page/add-course-page/AddCoursePage";
import ChapterCoursePage from "./pages/chapter-course-page/ChapterCoursePage";
import UpdateCoursePage from "./pages/course-management-page/update-course-page/UpdateCourse";
import LandingPage from "./pages/landing-page/LandingPage";
import Protected from "./components/Protected";
import Unauthorized from "./pages/unauthorized-page/Unauthorized";
import ProtectedDeleteToken from "./components/ProtectedDeleteToken";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/dashboard/login" element={<LoginPage />} />

          <Route
            path="/dashboard"
            element={
              <Protected>
                <MainLayout />
              </Protected>
            }
          >
            <Route index={true} element={<Home />} />
            <Route path="course-management">
              <Route index={true} element={<CourseManagement />} />
              <Route
                path={"chapter-course/:courseId"}
                element={<ChapterCoursePage />}
              />
              <Route
                path={"chapter-course/:courseId/delete-chapter/:chapterId"}
                element={<ChapterCoursePage />}
              />
              <Route
                path={"chapter-course/:courseId/update-chapter/:chapterId"}
                element={<ChapterCoursePage />}
              />
              <Route
                path={"chapter-course/:courseId/add-content/:chapterId"}
                element={<ChapterCoursePage />}
              />
              <Route
                path={
                  "chapter-course/:courseId/update-content/:contentId/:chapterId"
                }
                element={<ChapterCoursePage />}
              />
              <Route
                path={"chapter-course/:courseId/delete-content/:contentId"}
                element={<ChapterCoursePage />}
              />
              <Route path={":id"} element={<DetailCoursePage />} />
              <Route
                path={"delete-course/:id"}
                element={<CourseManagement />}
              />

              <Route path={"add-course"} element={<AddCoursePage />} />
              <Route
                path={"update-course/:courseId"}
                element={<UpdateCoursePage />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
