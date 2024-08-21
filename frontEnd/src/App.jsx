import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./SignUp";

function App() {
  const Loginrouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={Loginrouter} />
    </>
  );
}

export default App;
