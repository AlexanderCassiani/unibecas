import "./sidebar.css";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ setShowLogoutModal }) => {
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
        <button
          className="sidebar-logout-btn"
          onClick={() => setShowLogoutModal(true)}
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
