import Icon from './Icon';

const StatsCard = ({ label, value, icon, bg, color }) => {
  return (
    <article className="stat-card">
      <div className="stat-icon-wrapper" style={{ backgroundColor: bg, color }}>
        <Icon name={icon} className="icon-md" />
      </div>
      <div className="stat-content">
        <span className="stat-number">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </article>
  );
};

export default StatsCard;
