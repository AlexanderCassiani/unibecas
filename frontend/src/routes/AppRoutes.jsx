import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../features/home/Home";
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import Perfil from "../features/perfil/Perfil";

import SuperadminLayout from "../features/superadmin/layout/SuperadminLayout";
import Dashboard from "../features/superadmin/pages/dashboard/Dashboard";
import ManageAdmins from "../features/superadmin/pages/manageAdmins/ManageAdmins";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/superadmin" element={<SuperadminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manage-admins" element={<ManageAdmins />} />
          </Route>
        </Route>

        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
