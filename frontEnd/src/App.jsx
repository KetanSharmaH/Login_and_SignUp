import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="Login">
        <Login />
      </section>
    </>
  );
}

export default App;
