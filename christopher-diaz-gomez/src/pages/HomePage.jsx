import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import StatsCard from '../components/StatsCard';
import { books } from '../data/books';

const featuredBooks = books.filter((book) => book.destacado);

const totalLibros = books.length;
const categoriasUnicas = new Set(books.map((book) => book.categoria)).size;
const promedioRating = (books.reduce((acc, book) => acc + book.calificacion, 0) / totalLibros).toFixed(1);
const totalPaginas = books.reduce((acc, book) => acc + book.paginas, 0);

const stats = [
  { label: 'Libros Indexados', value: totalLibros, icon: 'book', bg: '#eef2ff', color: '#4f46e5' },
  { label: 'Categorías Temáticas', value: categoriasUnicas, icon: 'tag', bg: '#e0f2fe', color: '#0284c7' },
  { label: 'Calificación Promedio', value: promedioRating, icon: 'star', bg: '#fef3c7', color: '#d97706' },
  { label: 'Páginas Totales', value: totalPaginas.toLocaleString(), icon: 'book-marked', bg: '#ecfdf5', color: '#059669' }
];

const HomePage = () => {
  return (
    <>
      <PageHero
        eyebrow="Acerca de la colección"
        title="Biblioteca de Diseño & Teoría Visual"
        subtitle="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      >
        <div className="hero-actions">
          <Link to="/catalogo" className="btn btn-primary">
            Ver catálogo
          </Link>
          <Link to="/contacto" className="btn btn-secondary">
            Contacto
          </Link>
        </div>
      </PageHero>

      <section>
        <SectionHeading icon="bar-chart-3" title="Resumen del Repositorio" />
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatsCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              bg={stat.bg}
              color={stat.color}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '44px' }}>
        <SectionHeading
          icon="star"
          title="Obras Destacadas"
          to="/catalogo"
          actionLabel="Explorar Catálogo Completo"
        />

        <div className="cards-grid">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} libro={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
