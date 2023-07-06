import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="py-5 p-3 text-center">
    <nav className="bg-dark text-center fixed-top">
      <div className="">
        <div className="d-flex justify-content-evenly px-3 py-3 ">
          <div>
            <NavLink className="nav-link text-light fs-2" to="/home">
              Home
            </NavLink>
          </div>
          <div>
            <a className="nav-link text-light fs-2" href="/home#pformacoes">
              Principais Formações
            </a>
          </div>
          <div>
            <NavLink to="/projetos" className="nav-link text-light fs-2">
              Projetos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};
