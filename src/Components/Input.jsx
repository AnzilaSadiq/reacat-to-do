import { useState } from "react";
import { Plus } from "lucide-react";

function Input({ onAdd }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = taskText.trim();

    if (!text) return;

    onAdd(text);
    setTaskText("");
  };

  return (
    <form className="task-form glass-card" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        aria-label="Enter a new task"
        maxLength={200}
      />

      <button className="add-button" type="submit">
        <Plus size={18} />
        <span>Add</span>
      </button>
    </form>
  );
}

export default Input;