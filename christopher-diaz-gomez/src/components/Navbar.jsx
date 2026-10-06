import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/contacto', label: 'Contacto' }
];

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <div className="navbar__brand">
          <span className="brand-mark">L</span>
          <span>Biblioteca Visual</span>
        </div>

        <div className="navbar__links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
