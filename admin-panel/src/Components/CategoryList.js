import { AwesomeButton } from "react-awesome-button";
import { categories } from "../mockdata/categories";

export function CategoryList(handleClose) {
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
          <div clsaaName="d-flex w-10 justify-content-space-between">
            <AwesomeButton type="secondary" onPress={deleteThis}>
              Засах
            </AwesomeButton>
            <AwesomeButton type="danger" onPress={handleClose}>
              Устгах
            </AwesomeButton>
          </div>
        </div>
      ))}
    </div>
  );
}
