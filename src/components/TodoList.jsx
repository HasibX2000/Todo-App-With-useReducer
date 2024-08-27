import React from "react";
import Todo from "./Todo";

// TodoList component to display a list of todos
export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="space-y-3">
      {/* Map over the todos array and render each Todo component */}
      {todos.map((todo) => (
        <Todo
          key={todo.id} // Unique key for each Todo component
          todo={todo} // Pass the todo object to Todo component
          toggleTodo={() => toggleTodo(todo.id)} // Function to toggle todo completion
          deleteTodo={() => deleteTodo(todo.id)} // Function to delete todo
        />
      ))}
    </div>
  );
}
