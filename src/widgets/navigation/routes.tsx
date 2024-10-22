import { Routes, Route, Outlet, Link } from "react-router-dom";


import WelcomePage from "../../pages/welcome";
import NavBar from "./navbar";

const RoutePaths = (
  <Routes>
    <Route path="/" element={<NavBar />}>
      {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

      <Route path="*" element={<WelcomePage />} />
    </Route>
  </Routes>
)


export default RoutePaths;