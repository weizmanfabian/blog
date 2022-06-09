import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const styleList = {
  width: '.5em',
  height: '.5em'
};
const Navbar = ({ user, setUser }) => {

  const navigate = useNavigate();

  const cerrarSesion = () => {
    sessionStorage.removeItem('data');
    setUser('')
    navigate("/auth/login");
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/app/home">Home</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/app/uploadImage">Cargar Imagen</Link> */}
            </li>
          </ul>
          {/* Usuario de sesión */}
          <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.fullName}
                  <i className="fas fa-user-tie" />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark  dropdown-menu-end"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <button className="dropdown-item d-flex align-items-center gap-2 py-2" onClick={cerrarSesion}>
                    <span className="d-inline-block bg-danger rounded-circle" style={styleList} />
                    Cerrar Sesión
                  </button>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;