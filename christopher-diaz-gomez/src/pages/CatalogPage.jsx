import { useState } from 'react';
import { libros } from '../data/libros';
import BookCard from '../components/BookCard';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';

export default function CatalogPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categorias = Array.from(new Set(libros.map((libro) => libro.categoria))).sort();

  const resultados = libros.filter((libro) => {
    const termino = query.toLowerCase().trim();
    const coincideTexto =
      libro.titulo.toLowerCase().includes(termino) ||
      libro.autor.toLowerCase().includes(termino) ||
      libro.resumen.toLowerCase().includes(termino) ||
      libro.descripcion.toLowerCase().includes(termino) ||
      libro.editorial.toLowerCase().includes(termino);

    const coincideCategoria =
      selectedCategory === '' || libro.categoria === selectedCategory;

    return coincideTexto && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setQuery('');
    setSelectedCategory('');
  };

  return (
    <>
      <PageHero
        title="Colección de Textos & Documentos"
        subtitle="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
        compact
      />

      <section className="filter-toolbar">
        <div className="search-group">
          <Icon name="search" className="search-icon-pos icon-sm" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="search-input"
            placeholder="Buscar por título, autor o concepto..."
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="select-category"
        >
          <option value="">Todas las categorías</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>

        <span className="badge badge-neutral">
          <Icon name="layers" className="icon-sm" />
          <span>{resultados.length} de {libros.length} registros</span>
        </span>
      </section>

      <section>
        <div className="cards-grid">
          {resultados.length > 0 ? (
            resultados.map((libro) => <BookCard key={libro.id} libro={libro} />)
          ) : (
            <div className="empty-state">
              <p>No se encontraron registros con los filtros actuales.</p>
              <button type="button" className="btn btn-secondary" onClick={limpiarFiltros}>
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
