import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home";

const RouterConfig:React.VFC =() => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default RouterConfig;
