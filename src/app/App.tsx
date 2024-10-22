import React from "react";
import RoutePaths from "../widgets/navigation/routes";
import { Router, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <React.StrictMode>
      {RoutePaths}
    </React.StrictMode>
  );
};

export default App;
