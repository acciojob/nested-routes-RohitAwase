import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/women">Women</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

export default Layout;