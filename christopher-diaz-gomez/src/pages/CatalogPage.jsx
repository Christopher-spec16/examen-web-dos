import { useState } from 'react';
import BookCard from '../components/BookCard';
import { books, categories } from '../data/books';

const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === '' || book.categoria === selectedCategory;
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      book.titulo.toLowerCase().includes(query) ||
      book.autor.toLowerCase().includes(query) ||
      book.resumen.toLowerCase().includes(query) ||
      book.editorial.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  return (
    <section className="catalog-page">
      <div className="section-header catalog-header">
        <h2 className="section-title">
          <span>Catálogo</span>
        </h2>
      </div>

      <div className="catalog-toolbar">
        <div className="search-field">
          <input
            type="text"
            id="inputBusqueda"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar por título, autor, editorial o resumen"
            aria-label="Buscar libros"
          />
        </div>

        <div className="select-field">
          <select
            id="selectCategoria"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            aria-label="Filtrar por categoría"
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="catalog-meta">
        <span id="textoConteo">{filteredBooks.length} de {books.length} registros</span>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="cards-grid cards-grid--catalog">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} libro={book} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No se encontraron registros con los filtros actuales.</p>
          <button type="button" className="btn btn-secondary" onClick={clearFilters}>
            Limpiar Filtros
          </button>
        </div>
      )}
    </section>
  );
};

export default CatalogPage;
