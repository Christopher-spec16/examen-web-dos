import Icon from './Icon';

const getBadgeClass = (categoria) => {
  switch (categoria) {
    case 'Arquitectura':
      return 'badge-arquitectura';
    case 'Diseño Industrial':
      return 'badge-industrial';
    case 'Diseño Gráfico':
      return 'badge-grafico';
    case 'Estética':
      return 'badge-estetica';
    case 'Tipografía':
      return 'badge-tipografia';
    default:
      return 'badge-industrial';
  }
};

export default function BookCard({ libro }) {
  const badgeClass = getBadgeClass(libro.categoria);

  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            <Icon name={libro.icono} className="icon-sm" />
          </div>
          <span className="card-rating-badge">
            <Icon name="star" className="icon-sm" />
            <span>{libro.calificacion.toFixed(1)}</span>
          </span>
        </div>

        <span className={`badge ${badgeClass}`} style={{ marginBottom: '12px' }}>
          {libro.categoria}
        </span>
        <h3 className="card-title">{libro.titulo}</h3>
        <p className="card-author">Por {libro.autor} ({libro.anio})</p>
        <p className="card-summary">{libro.resumen}</p>

        <div className="card-details-box">
          <span>
            Editorial: <strong>{libro.editorial}</strong>
          </span>
          <span>
            ISBN: <code>{libro.isbn}</code>
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <Icon name="book-marked" className="icon-sm" />
          <span>{libro.paginas} páginas</span>
        </span>
        <span className="card-meta muted-meta">
          <Icon name="calendar" className="icon-sm" />
          <span>Edición {libro.anio}</span>
        </span>
      </div>
    </article>
  );
}
