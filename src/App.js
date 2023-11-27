import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Cart from "./component/Cart";
import Dashboard from "./component/Dashboard";
import RootLayout from "./component/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>{" "}
        {/* Here replace path='/dashboard'   into  index */}
        <Route path="/cart" element={<Cart />}>
          {" "}
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
