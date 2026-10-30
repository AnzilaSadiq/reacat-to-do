import { Sparkles } from "lucide-react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <Sparkles size={28} />
        </div>

        <h3>No tasks yet</h3>
        <p>Create your first task to get started</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;