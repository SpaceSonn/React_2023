import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState();
  const [editingTexts, setEditingTexts] = useState({});

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    if (text === "") {
      setError("utgaa bichne uu");
    } else {
      if (editing === undefined) {
        const newTodo = {
          text: text,
          done: false,
          id: uuidv4(),
        };
        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);
      } else {
        const newTodos = [...todos];
        newTodos[editing].text = text;
        setTodos(newTodos);
        setEditing(undefined);
      }
      setText("");
      setError("");
    }
  }

  function handleDelete12(bairlal1) {
    if (window.confirm("ustgah uu ?")) {
      const newTodos = [...todos];
      newTodos.splice(bairlal1, 1); // delete item from array using index
      setTodos(newTodos);
    }
  }

  function handleDoneChange(id, e) {
    const newTodos = [...todos];

    let index;
    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        index = i;
        break;
      }
    }
    newTodos[index].done = !newTodos[index].done;

    setTodos(newTodos);
  }
  // zasah arga 1
  // function editTodoWithPrompt(id) {
  //   const newTodos = [...todos];

  //   const index = newTodos.findIndex((todo) => todo.id === id);

  //   const editedText = prompt("todo zasah", todos[index].text);
  //   newTodos[index].text = editedText;

  //   setTodos(newTodos);
  // }

  // zasah arga 2
  // function editTodoWithCreateInput(index) {
  //   setEditing(index);
  //   setText(todos[index].text);
  // }
  // zasah arga 3

  function editTodoInLine(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].text;
    setEditingTexts(newEditingTexts);
  }

  function handleEditingText(id, e) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = e.target.value;
    setEditingTexts(newEditingTexts);
  }

  function cancelEditing(id) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = undefined;
    setEditingTexts(newEditingTexts);
  }

  function updateEditingText(index, id) {
    const newTodos = { ...todos };
    newTodos[index].text = editingTexts[id];
    setTodos(newTodos);

    cancelEditing(id);
  }
  function handleKeyUp(e) {
    if (e.code === "Enter") {
      addTodo();
    }
  }

  return (
    <div>
      <input
        value={text}
        style={{ borderColor: error ? "red" : "black" }}
        onChange={handleTextChange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={addTodo}>Nemeh</button>

      {error && <div style={{ color: "red" }}>Aldaa: {error}</div>}

      <ul>
        {todos.map((todo1, index1) => {
          const d = index1 * 2;
          return (
            <li
              key={todo1.id}
              style={{ textDecoration: todo1.done ? "line-through" : "none" }}
            >
              {editingTexts[todo1.id] !== undefined ? (
                <>
                  <input
                    value={editingTexts[todo1.id]}
                    onChange={(e) => handleEditingText(todo1.id, e)}
                  />
                  <button onClick={() => cancelEditing(todo1.id)}>bolih</button>
                  <button onClick={() => updateEditingText(index1, todo1.id)}>
                    Hadgalah
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    onChange={(e) => handleDoneChange(todo1.id, e)}
                  />
                  {todo1.text}
                  {!todo1.done && (
                    <>
                      {/* zasah arga 1  */}
                      {/* <button onClick={() => editTodoWithPrompt(todo1.id)}>
                    Zasah
                  </button> */}
                      {/* zasah  arga 2 */}
                      {/* <button onClick={() => editTodoWithCreateInput(index1)}>Zasah</button> */}
                      {/* {zasah arga 3} */}
                      <button onClick={() => editTodoInLine(todo1.id, index1)}>
                        Zasah
                      </button>
                    </>
                  )}
                  <button onClick={() => handleDelete12(index1, d)}>
                    Ustgah
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
