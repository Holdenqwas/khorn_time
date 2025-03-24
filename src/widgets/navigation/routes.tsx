import { Routes, Route } from "react-router-dom";

import WelcomePage from "../../pages/welcome";
import BlogPage from "../../pages/blog";
import AboutMePage from "../../pages/about_me";
import ProjectsPage from "../../pages/projects";
import UsesPage from "../../pages/uses";
import SplitKeyboardPage from "../../pages/blog/splite_keyboard";
import ConnectAlicePage from "../../pages/connect_alice";


const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="about_me" element={<AboutMePage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="uses" element={<UsesPage />} />
      <Route path="connect_alice" element={<ConnectAlicePage />} />

      <Route path="*" element={<WelcomePage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog/splite_keyboard" element={<SplitKeyboardPage />} />

    </Routes>
  )
}

export default RoutePaths;