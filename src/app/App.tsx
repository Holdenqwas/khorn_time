import React from "react";
import RoutePaths from "../widgets/navigation/routes";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <RoutePaths />
    </BrowserRouter>
  );
};

export default App;
