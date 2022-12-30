import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () =>{
    return (
    <div>
                <nav>
                <ul className="menu">
                <li><Link className="nav" to="/">Inicio</Link></li>
                <li><Link className="nav" to="/contacto/:">Contacto</Link></li>
                <div className="dropdown">
  <a className="btn btn-danger dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categorias
  </a>

  <ul className="dropdown-menu">
    <li><Link className="MenuDespegable" to="/category/ColorBlanco">*Remeras Blancas</Link></li>
    <li><Link className="MenuDespegable" to="/category/ColorAzul">*Remeras Azules</Link></li>
    <li><Link className="MenuDespegable" to="/category/ColorRojo">*Remeras Rojas</Link></li>
  </ul>
</div>
                <CartWidget />
                </ul>
            </nav>
    </div>
    );
};

export default NavBar;