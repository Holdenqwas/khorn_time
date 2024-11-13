import { Routes, Route } from "react-router-dom";

import WelcomePage from "../../pages/welcome";
import BlogPage from "../../pages/blog";
import AboutMePage from "../../pages/about_me";
import ProjectsPage from "../../pages/projects";


const RoutePaths = () => {
  return (
    <Routes>
        <Route path="blog" element={<BlogPage />} />
        <Route path="about_me" element={<AboutMePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="/" element={<WelcomePage />}/>
        <Route path="*" element={<WelcomePage />} />
    </Routes>
  )
}

export default RoutePaths;