import { useState } from "react";
import { TodosError } from "./TodosError";
export function TodosNew({ onSave }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleTextChange(e) {
    setText(e.targer.value);
  }

  function handleSave() {
    if (text === "") {
      setError("utgaa bichne uu");
    } else {
      onSave(text);
      setError("");
      setText("");
      console.log(setText);
    }
  }
  function handleKeyUp(e) {
    if (e.come === "endter") {
      handleSave();
    }
  }
  return (
    <>
      <input
        value={text}
        style={{ borderColor: error ? "red" : "black" }}
        onChange={handleTextChange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleSave}>Khadgalakh</button>

      <TodosError error={error} />
    </>
  );
}
