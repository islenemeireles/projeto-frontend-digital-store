import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="nav-link"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to="/produtos"
        className="nav-link"
        activeClassName="active"
      >
        Produtos
      </NavLink>
      <NavLink
        to="/categorias"
        className="nav-link"
        activeClassName="active"
      >
        Categorias
      </NavLink>
      <NavLink
        to="/meus-pedidos"
        className="nav-link"
        activeClassName="active"
      >
        Meus Pedidos
      </NavLink>
    </nav>
  );
};
export default Navbar;