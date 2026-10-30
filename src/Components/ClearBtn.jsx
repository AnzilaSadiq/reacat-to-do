import { Trash2 } from "lucide-react";

function ClearBtn({ onClear }) {
  return (
    <button className="clear-button" onClick={onClear}>
      <Trash2 size={15} />
      <span>Clear completed</span>
    </button>
  );
}

export default ClearBtn;