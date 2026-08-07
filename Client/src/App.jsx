import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";

const App = () => {
  return (
    <div className="bg-olive-100 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
