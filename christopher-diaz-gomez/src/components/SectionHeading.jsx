export default function SectionHeading({ icon, title, action }) {
  return (
    <div className="section-header">
      <h2 className="section-title">
        {icon}
        <span>{title}</span>
      </h2>
      {action}
    </div>
  );
}
