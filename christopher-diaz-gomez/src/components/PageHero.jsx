export default function PageHero({ title, subtitle, tag, compact = false }) {
  return (
    <section className={`hero-banner${compact ? ' hero-banner-compact' : ''}`}>
      {tag && <span className="hero-tag">{tag}</span>}
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
    </section>
  );
}
