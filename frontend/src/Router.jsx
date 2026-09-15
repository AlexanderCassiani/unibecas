import HomeLayout from "./home/layout/HomeLayout";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
    </Routes>
  );
};

export default Router;
