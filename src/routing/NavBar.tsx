import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          My App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/users" className="nav-link">
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
