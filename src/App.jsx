import { useEffect, useState } from "react";
import Header from "./Components/Header";
import StatsGrid from "./Components/StatsGrid";
import Input from "./Components/Input";
import TodoList from "./Components/TodoList";
import ClearBtn from "./Components/ClearBtn";
import Notification from "./Components/Notification";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("taskflow-tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => setMessage(""), 2500);
    return () => clearTimeout(timer);
  }, [message]);

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    setMessage("Task added successfully!");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setMessage("Task deleted!");
  };

  const clearCompleted = () => {
    const completedCount = tasks.filter((task) => task.completed).length;

    if (!completedCount) {
      setMessage("No completed tasks to clear.");
      return;
    }

    setTasks((prev) => prev.filter((task) => !task.completed));
    setMessage("Completed tasks cleared!");
  };

  const total = tasks.length;
  const done = tasks.filter((task) => task.completed).length;
  const active = total - done;

  return (
    <main className="app">
      <div className="dashboard">
        <Header active={active} />

        <StatsGrid total={total} active={active} done={done} />

        <Input onAdd={addTask} />

        <section className="tasks-panel">
          <div className="tasks-heading">
            <div>
              <h2>Your Tasks</h2>
              <p>Stay focused and get things done.</p>
            </div>

            {done > 0 && <ClearBtn onClear={clearCompleted} />}
          </div>

          <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </section>

        <footer className="app-footer">Made for better productivity</footer>
      </div>

      <Notification message={message} />
    </main>
  );
}

export default App;
