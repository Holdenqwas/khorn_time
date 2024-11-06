import React from "react";
import RoutePaths from "../widgets/navigation/routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../widgets/navigation/navbar";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <RoutePaths />
      </BrowserRouter>
    </div>
  );
};

export default App;
