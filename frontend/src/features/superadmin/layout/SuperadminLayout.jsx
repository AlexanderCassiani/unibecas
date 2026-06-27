import Sidebar from "../components/sidebar/Sidebar";
import "./superadminLayout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { perfil } from "../../auth/services/authService";
import { useState, useEffect } from "react";

export default function SuperadminLayout() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const perfilData = await perfil();

        if (!perfilData.user || perfilData.user.rol !== "SUPERADMINISTRADOR") {
          navigate("/login");
          return;
        }

        setData(perfilData.user);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };
    obtenerDatos();
  }, [navigate]);

  return (
    <div className="superadmin-layout">
      <Sidebar />

      <main className="superadmin">
        <div className="top-superadmin-layout">
          Bienvenido superadmin <span>{data?.usuario}</span>
        </div>

        <div className="superadmin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
