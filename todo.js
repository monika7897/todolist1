import TodoList from "./Button/TodoList"

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
// Inside your ToDoList component
handleAddTodo = () => {
  if (this.state.newTodo.trim() === '') {
    return; // Prevent adding empty to-dos
  }
  const newTodos = [...this.state.todos, this.state.newTodo];
  this.setState({ todos: newTodos, newTodo: '' });
};



export default TodoList;
