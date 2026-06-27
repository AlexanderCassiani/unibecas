import Sidebar from "../components/sidebar/Sidebar";
import "./superadminLayout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { perfil } from "../../auth/services/authService";
import { useState, useEffect } from "react";

export default function SuperadminLayout() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!data || data.role !== "SUPERADMINISTRADOR") {
    navigate("/login");
  }

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const perfilData = await perfil();
        setData(perfilData.user);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div className="superadmin-layout">
      <Sidebar />

      <main className="superadmin">
        <div className="top-superadmin-layout">
          Bienvenido superadmin {data?.usuario}
        </div>

        <div className="superadmin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
