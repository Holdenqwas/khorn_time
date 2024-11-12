import { Routes, Route } from "react-router-dom";

import WelcomePage from "../../pages/welcome";
import BlogPage from "../../pages/blog";


const RoutePaths = () => {
  return (
    <Routes>
        <Route path="blog" element={<BlogPage />} />
        <Route path="/" element={<WelcomePage />}/>
        <Route path="*" element={<WelcomePage />} />
    </Routes>
  )
}

export default RoutePaths;