import { NavLink } from "react-router-dom";

export default Sidebar = () => {
    return (
        <aside className="sidebar">
            <div>
                <h2>Unibecas</h2>
            </div>
            
            <nav>
                <ul>
                    <li>
                        <NavLink to="/superadmin/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/superadmin/admin">Gestionar admins</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}