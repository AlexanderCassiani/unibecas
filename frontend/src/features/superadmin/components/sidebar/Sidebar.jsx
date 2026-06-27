import "./sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Unibecas</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActive" : "sidebar-nav-link"
              }
              to="/superadmin/dashboard"
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "isActive" : "sidebar-nav-link"
              }
              to="/superadmin/manage-admins"
            >
              Gestionar admins
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-logout-btn" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
