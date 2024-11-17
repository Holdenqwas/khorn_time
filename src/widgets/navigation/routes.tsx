import { Routes, Route } from "react-router-dom";

import WelcomePage from "../../pages/welcome";
import BlogPage from "../../pages/blog";
import AboutMePage from "../../pages/about_me";
import ProjectsPage from "../../pages/projects";
import UsesPage from "../../pages/uses";
import SpliteKeyboardPage from "../../pages/blog/splite_keyboard";


const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} >
        <Route index element={<WelcomePage />} />
        <Route path="about_me" element={<AboutMePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="uses" element={<UsesPage />} />

        <Route path="*" element={<WelcomePage />} />
        <Route path="blog" element={<BlogPage />} >
          <Route path="splite_keyboard" element={<SpliteKeyboardPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default RoutePaths;