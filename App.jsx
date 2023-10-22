import { useEffect, useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import "./styles.css";
import { TodoList } from "./components/Button/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // Function to add a new todo item
  function addTodo(title) {
    const newTodo = { id: generateId(), title, completed: false };
    setTodos([...todos, newTodo]);
  }

  // Function to toggle a todo item's completion
  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  // Function to delete a todo item
  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Effect to update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

// Function to generate a unique ID
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
