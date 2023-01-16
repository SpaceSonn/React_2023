import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoListItem } from "./TodoListItem";
import { TodosNew } from "./TodosNew";

export function Todos() {
  const [todos, setTodos] = useState([]);

  function handleSave(text) {
    const newTodo = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  }

  function handleDelete(index) {
    if (window.confirm("ustgah uu?")) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  }

  function handleUpdate(index, text) {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
  }

  return (
    <div>
      <TodosNew onSave={handleSave} />

      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onUpdate={(text) => handleUpdate(index, text)}
              onDelete={() => handleDelete(index)}
            />
          );
        })}
      </ul>
    </div>
  );
}