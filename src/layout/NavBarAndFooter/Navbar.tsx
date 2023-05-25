import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="text-bg-dark py-3 p-3">
      <div className="container">
        <div className="d-flex justify-content-evenly px-3 py-3 fo">
          <div>
            <NavLink className='nav-link text-light fs-2' to='/home'>
                Home
            </NavLink>
          </div>
          <div>
            <a className='nav-link text-light fs-2' href="#scrollspyHeading1">Principais Formações</a>
          </div>
          <div>
          <NavLink to="/projetos" className="nav-link text-light fs-2">
              Projetos
              </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
