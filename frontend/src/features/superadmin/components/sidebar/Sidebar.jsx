import "./sidebar.css";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
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
    </aside>
  );
};

export default Sidebar;
