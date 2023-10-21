import { useState } from "react";
import { TodoList } from "./Button/TodoList";
import ConfirmationPopup from "./Button/ConfirmationPopup"; // Import the ConfirmationPopup component


export function NewTodoForm({ onSubmit, todos, toggleTodo, deleteTodo, isPopupOpen, closePopup, handlePopupConfirmation }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }


  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
    
      {/* Remove the recursive rendering */}
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <ConfirmationPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onConfirm={handlePopupConfirmation}
      />
      <NewTodoForm onSubmit={addTodo} />
      {/* New Item Form */}
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default NewTodoForm;
