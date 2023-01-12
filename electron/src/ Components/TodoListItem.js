import { useState } from "react";

export function TodoListItem({ todo, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [done, setDone] = useState(false);

  function handleDoneToggle() {
    setDone(!done);
  }
  function handleSave(text) {
    onUpdate(text);
    setEditing(false);
  }

  if (editing) {
    return (
      <EditingItem
        defaultValue={todo.text}
        onCancel={() => setEditing(false)}
        onSave={handleSave}
      />
    );
  }
  return (
    <NormalItem
      onToggleDone={handleDoneToggle}
      done={done}
      todo={todo}
      onEdit={() => setEditing(true)}
      onDelete={onDelete}
    />
  );
}

function EditingItem({ onSave, onCancel, defaultValue }) {
  const [text, setText] = useState(defaultValue);

  return (
    <li>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => onCancel()}> bolih </button>
      <button onClick={() => onSave()}> KHadgalakh</button>
    </li>
  );
}

function NormalItem({ done, onToggleDone, todo, onEdit, onDelete }) {
  return (
    <li style={{ textDecoration: done ? "line-through" : "none" }}>
      <input type="checkbox" checked={done} onChange={onToggleDone} />{" "}
      {todo.text}
      {!done && (
        <>
          <button onClick={onEdit}> Zasakh </button>
        </>
      )}
      <button onClick={onDelete}>Ustgakh</button>
    </li>
  );
}
