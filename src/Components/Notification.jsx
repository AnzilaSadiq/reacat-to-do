import { CheckCircle2 } from "lucide-react";

function Notification({ message }) {
  if (!message) return null;

  return (
    <div className="notification" role="status" aria-live="polite">
      <CheckCircle2 size={18} />
      <span>{message}</span>
    </div>
  );
}

export default Notification;