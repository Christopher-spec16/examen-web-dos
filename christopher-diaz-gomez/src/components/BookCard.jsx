const BookCard = ({ title, author, category, year, description, rating }) => {
  return (
    <article className="book-card">
      <div className="book-card__top">
        <span className="book-card__category">{category}</span>
        <span className="book-card__rating">★ {rating}</span>
      </div>

      <div className="book-card__content">
        <h3>{title}</h3>
        <p className="book-card__author">{author}</p>
        <p className="book-card__year">{year}</p>
        <p className="book-card__description">{description}</p>
      </div>
    </article>
  );
};

export default BookCard;
