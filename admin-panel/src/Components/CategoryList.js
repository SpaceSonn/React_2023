import { AwesomeButton } from "react-awesome-button";
import { categories } from "../mockdata/categories";

export function CategoryList() {
  function deleteThis() {
    return alert("delete");
  }

  return (
    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
      {categories.map((cat1) => (
        <div
          className="d-flex justify-content-between mt-5 mb-3 p-3 border rounded align-items-center"
          key={cat1.id}
        >
          {cat1.name}
          <AwesomeButton type="secondary" onPress={deleteThis}>
            Засах
          </AwesomeButton>
        </div>
      ))}
    </div>
  );
}
