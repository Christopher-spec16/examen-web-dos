import { Link } from 'react-router-dom';
import Icon from './Icon';

const SectionHeading = ({ icon, title, to, actionLabel }) => {
  return (
    <div className="section-header">
      <h2 className="section-title">
        <Icon name={icon} className="icon-sm" />
        <span>{title}</span>
      </h2>

      {to && actionLabel ? (
        <Link to={to} className="btn btn-outline">
          <span>{actionLabel}</span>
          <Icon name="arrow-right" className="icon-sm" />
        </Link>
      ) : null}
    </div>
  );
};

export default SectionHeading;
