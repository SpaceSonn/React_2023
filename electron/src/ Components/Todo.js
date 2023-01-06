import { useState } from "react";

export function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    if (text === "") {
      setError("utgaa bichne uu");
    } else {
      const newTodos = [text, ...todos];
      setTodos(newTodos);
      setText("");
      setError("");
    }
  }

  function handleDelete12(bairlal1) {
    if (window.confirm("ustgah uu ?")) {
      const newTodos = [...todos];
      newTodos.splice(bairlal1, 1); // delete item from array using index
    }
  }

  return (
    <div>
      <input
        value={text}
        style={{ borderColor: error ? "red" : "black" }}
        onChange={handleTextChange}
      />
      <button onClick={addTodo}>Nemeh</button>

      {error && <div style={{ color: "red" }}>Aldaa: {error}</div>}

      <ul>
        {todos.map((todo1, index1) => {
          return (
            <li key={index1} style={{ textDecoration: "line-through" }}>
              <input type="checkbox" /> {todo1}
              <button onClick={() => handleDelete12(index1)}>Ustgah</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
