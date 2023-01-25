import "./App.css";
import { useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

function App() {
  return;
}
useEffect(() => {
  axios("https//localhost:8080").then((req) => req.json());
});

export default App;
