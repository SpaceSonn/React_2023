import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header.js";
import Body from "./Components/body.js";
import { CategoryList } from "./Components/CategoryList";
function App() {
  return (
    <>
      <Header />
      <Body />
      <CategoryList />
    </>
  );
}

export default App;
