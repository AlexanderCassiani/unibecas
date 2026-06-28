import Sidebar from "../components/sidebar/Sidebar";
import "./superadminLayout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { perfil } from "../../auth/services/authService";
import { useState, useEffect } from "react";
import LogoutModal from "../../../components/logout-modal/LogoutModal";

export default function SuperadminLayout() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
      <Sidebar setShowLogoutModal={setShowLogoutModal} />

      <main className="superadmin">
        <div className="top-superadmin-layout">
          Bienvenido superadmin <span>{data?.usuario}</span>
        </div>

        <div className="superadmin-content">
          <Outlet />
        </div>
      </main>
      {showLogoutModal && (
        <LogoutModal setShowLogoutModal={setShowLogoutModal} />
      )}
    </div>
  );
}
