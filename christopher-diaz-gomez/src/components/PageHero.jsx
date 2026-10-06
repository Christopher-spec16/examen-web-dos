const PageHero = ({ eyebrow, title, subtitle, children }) => {
  return (
    <section className="hero-banner">
      {eyebrow ? <span className="hero-tag">{eyebrow}</span> : null}
      <h1 className="hero-title">{title}</h1>
      {subtitle ? <p className="hero-subtitle">{subtitle}</p> : null}
      {children}
    </section>
  );
};

export default PageHero;
