import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const navItems = [
  { to: '/', label: 'Inicio', icon: 'home' },
  { to: '/catalogo', label: 'Catálogo', icon: 'grid' },
  { to: '/contacto', label: 'Contacto', icon: 'mail' }
];

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <NavLink to="/" className="brand">
          <div className="brand-badge">
            <Icon name="book-open" className="icon-sm" />
          </div>
          <span>Librería Archivo</span>
        </NavLink>

        <nav aria-label="Navegación principal">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <Icon name={item.icon} className="icon-sm" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
