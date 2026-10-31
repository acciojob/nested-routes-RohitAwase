import React from "react";
import './../styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./Layout";
import Women from "./Women";

import Home from "./Home";
import ItemDetails from "./ItemDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          {/* Index Route */}
          <Route index element={<Home />} />

          {/* Nested Category Route */}
          <Route path="women" element={<Women />}>

            {/* Nested Item Route */}
            <Route
              path=":itemId"
              element={<ItemDetails />}
            />

          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
