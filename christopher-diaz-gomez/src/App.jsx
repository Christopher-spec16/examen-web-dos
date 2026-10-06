import BookCard from './components/BookCard';

const books = [
  {
    title: 'La arquitectura del detalle',
    author: 'Ana Rojas',
    category: 'Arquitectura',
    year: 2022,
    rating: 4.9,
    description:
      'Un análisis profundo sobre materiales, proporciones y experiencia espacial en proyectos contemporáneos.'
  },
  {
    title: 'Tipografía y emoción',
    author: 'Mateo Silva',
    category: 'Tipografía',
    year: 2021,
    rating: 4.8,
    description:
      'Explora cómo la tipografía comunica tono, personalidad y estructura visual en marcas y editoriales.'
  },
  {
    title: 'Diseño gráfico para la percepción',
    author: 'Elena Torres',
    category: 'Diseño Gráfico',
    year: 2023,
    rating: 5.0,
    description:
      'Una guía práctica para crear piezas visuales coherentes, memorables y funcionales en distintos medios.'
  }
];

function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="hero__eyebrow">Biblioteca</p>
        <h1>Catálogo de publicaciones</h1>
        <p className="hero__subtitle">
          Arquitectura, diseño gráfico, tipografía y estética para inspirar cada proyecto.
        </p>
      </header>

      <section className="book-grid" aria-label="Catálogo de libros">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </section>
    </main>
  );
}

export default App;
