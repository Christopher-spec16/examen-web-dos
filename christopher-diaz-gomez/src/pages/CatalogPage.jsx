import { useState } from 'react';
import { books, categories } from '../data/books';
import BookCard from '../components/BookCard';

const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === 'Todos' || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="catalog-page">
      <div className="section-header section-header--stacked">
        <div>
          <p className="eyebrow">Catálogo</p>
          <h1>Explora la colección</h1>
        </div>
      </div>

      <div className="catalog-controls">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Buscar por título, autor o categoría"
          aria-label="Buscar publicaciones"
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          aria-label="Filtrar por categoría"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="empty-state">
          <p>No se encontraron publicaciones con esos filtros.</p>
        </div>
      )}
    </section>
  );
};

export default CatalogPage;
