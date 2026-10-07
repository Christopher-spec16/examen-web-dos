import { NavLink, Outlet } from 'react-router-dom';
import Icon from './Icon';

const navItems = [
  { to: '/', label: 'Inicio', icon: 'home' },
  { to: '/catalogo', label: 'Catálogo', icon: 'grid' },
  { to: '/contacto', label: 'Contacto', icon: 'mail' },
];

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-bar">
          <NavLink to="/" className="brand">
            <div className="brand-badge">
              <Icon name="book-open" />
            </div>
            <span>Librería Archivo</span>
          </NavLink>

          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
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

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>
            <strong>Librería Archivo</strong> • Catálogo bibliográfico de diseño
          </span>
          <span>Colección abierta para consulta</span>
        </div>
      </footer>
    </>
  );
}
