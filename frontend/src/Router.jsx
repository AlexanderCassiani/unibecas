import HomeLayout from "./home/layout/HomeLayout";
import { Routes, Route } from "react-router-dom";
import BecaDetails from "./components/becaDetails/BecaDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />

      <Route path="/beca/:id" element={<BecaDetails />} />
    </Routes>
  );
};

export default Router;
