import { Link } from 'react-router-dom';
import { books } from '../data/books';

const featuredBooks = books.slice(0, 3);

const metrics = [
  { label: 'Publicaciones', value: books.length },
  { label: 'Categorías', value: '5' },
  { label: 'Año base', value: '2019' }
];

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div>
          <p className="eyebrow">Acerca de la colección</p>
          <h1>Biblioteca de arquitectura y diseño</h1>
          <p className="hero-text">
            Exploración visual y conceptual de publicaciones que conectan estética, orden, materialidad y creatividad.
          </p>
          <div className="hero-actions">
            <Link to="/catalogo" className="primary-button">Ver catálogo</Link>
            <Link to="/contacto" className="secondary-button">Contacto</Link>
          </div>
        </div>

        <div className="stats-panel">
          {metrics.map((metric) => (
            <div key={metric.label} className="stat-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <h2>Publicaciones destacadas</h2>
          <Link to="/catalogo">Ver todo</Link>
        </div>

        <div className="book-grid">
          {featuredBooks.map((book) => (
            <article key={book.id} className="book-card">
              <div className="book-card__top">
                <span className="book-card__category">{book.category}</span>
                <span className="book-card__rating">★ {book.rating}</span>
              </div>
              <div className="book-card__body">
                <h3>{book.title}</h3>
                <p className="book-card__author">{book.author}</p>
                <p className="book-card__year">{book.year}</p>
                <p className="book-card__description">{book.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
