import Sidebar from "../components/sidebar/Sidebar";
import "./superadminLayout.css";
import { Outlet } from "react-router-dom";

export default function SuperadminLayout() {
  return (
    <div className="superadmin-layout">
      <Sidebar />
      <div className="superadmin-content">
        <Outlet />
      </div>
    </div>
  );
}
