import Icon from './Icon';

export default function StatsCard({ label, valor, icono, bg, color }) {
  return (
    <article className="stat-card">
      <div className="stat-icon-wrapper" style={{ backgroundColor: bg, color }}>
        <Icon name={icono} />
      </div>
      <div className="stat-content">
        <span className="stat-number">{valor}</span>
        <span className="stat-label">{label}</span>
      </div>
    </article>
  );
}
