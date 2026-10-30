import { Check, Trash2 } from "lucide-react";

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <article
      className={`todo-item ${task.completed ? "completed" : ""}`}
    >
      <button
        className="check-button"
        onClick={() => onToggle(task.id)}
        aria-label={
          task.completed ? "Mark as active" : "Mark as completed"
        }
        title={task.completed ? "Mark as active" : "Complete task"}
      >
        {task.completed && <Check size={15} />}
      </button>

      <span className="todo-text">{task.text}</span>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
        title="Delete task"
      >
        <Trash2 size={17} />
      </button>
    </article>
  );
}

export default TodoItem;