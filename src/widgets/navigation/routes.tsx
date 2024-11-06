import { Routes, Route, Outlet, Link } from "react-router-dom";


import WelcomePage from "../../pages/welcome";
import NavBar from "./navbar";
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