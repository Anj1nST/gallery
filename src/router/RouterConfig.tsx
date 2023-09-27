import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCase from "../pages/ShowCase";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
