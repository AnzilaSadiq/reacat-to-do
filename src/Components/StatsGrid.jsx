import { Zap, Circle, CheckCircle2 } from "lucide-react";

function StatsGrid({ total, active, done }) {
  const stats = [
    {
      label: "Total",
      value: total,
      icon: <Zap size={16} />,
      className: "total-stat",
    },
    {
      label: "Active",
      value: active,
      icon: <Circle size={16} />,
      className: "active-stat",
    },
    {
      label: "Done",
      value: done,
      icon: <CheckCircle2 size={16} />,
      className: "done-stat",
    },
  ];

  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <div
          className={`stat-card glass-card ${stat.className}`}
          key={stat.label}
        >
          <div className="stat-label">
            {stat.icon}
            <span>{stat.label}</span>
          </div>

          <strong>{stat.value}</strong>
        </div>
      ))}
    </section>
  );
}

export default StatsGrid;