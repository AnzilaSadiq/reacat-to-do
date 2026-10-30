import { Activity, Sparkles } from "lucide-react";

function Header({ active }) {
  return (
    <header className="header glass-card">
      <div className="brand">
        <div className="brand-icon">
          <Sparkles size={22} />
        </div>

        <div>
          <h1>TaskFlow</h1>
          <p>Productivity Reimagined</p>
        </div>
      </div>

      <div className="active-badge">
        <Activity size={15} />
        <span>{active} Active</span>
      </div>
    </header>
  );
}

export default Header;