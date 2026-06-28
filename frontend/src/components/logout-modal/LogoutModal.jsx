import "./logoutModal.css";
import { useNavigate } from "react-router-dom";

export const LogoutModal = ({ setShowLogoutModal }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <div
      className="logout-modal-overlay"
      onClick={() => setShowLogoutModal(false)}
    >
      <div className="logout-modal">
        <h2 className="logout-modal-title">
          ¿Estás seguro de que quieres cerrar sesión?
        </h2>

        <div className="logout-modal-buttons">
          <button
            className="logout-modal-btn cancel-btn"
            onClick={() => setShowLogoutModal(false)}
          >
            Cancelar
          </button>
          <button
            className="logout-modal-btn confirm-btn"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
