import { Link } from 'react-router-dom';
import { libros } from '../data/libros';
import BookCard from '../components/BookCard';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import StatsCard from '../components/StatsCard';

export default function HomePage() {
  const totalLibros = libros.length;
  const categoriasUnicas = new Set(libros.map((libro) => libro.categoria)).size;
  const promedioRating = (libros.reduce((acc, libro) => acc + libro.calificacion, 0) / totalLibros).toFixed(1);
  const totalPaginas = libros.reduce((acc, libro) => acc + libro.paginas, 0);

  const stats = [
    { label: 'Libros Indexados', valor: totalLibros, icono: 'book', bg: '#eef2ff', color: '#4f46e5' },
    { label: 'Categorías Temáticas', valor: categoriasUnicas, icono: 'tag', bg: '#e0f2fe', color: '#0284c7' },
    { label: 'Calificación Promedio', valor: promedioRating, icono: 'star', bg: '#fef3c7', color: '#d97706' },
    { label: 'Páginas Totales', valor: totalPaginas.toLocaleString(), icono: 'file-text', bg: '#ecfdf5', color: '#059669' },
  ];

  const destacados = libros.filter((libro) => libro.destacado);

  return (
    <>
      <PageHero
        tag="Colección"
        title="Biblioteca de Diseño & Teoría Visual"
        subtitle="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      />

      <section>
        <SectionHeading
          icon={<Icon name="bar-chart-3" />}
          title="Resumen del Repositorio"
        />
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatsCard
              key={stat.label}
              label={stat.label}
              valor={stat.valor}
              icono={stat.icono}
              bg={stat.bg}
              color={stat.color}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '44px' }}>
        <SectionHeading
          icon={<Icon name="star" />}
          title="Obras Destacadas"
          action={
            <Link to="/catalogo" className="btn btn-outline">
              <span>Explorar Catálogo Completo</span>
              <Icon name="arrow-right" className="icon-sm" />
            </Link>
          }
        />
        <div className="cards-grid">
          {destacados.map((libro) => (
            <BookCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </>
  );
}
