import React from "react";
import { Link, Outlet } from "react-router-dom";

function Women() {
  const items = [
    { id: 1, name: "Dress", description: "Beautiful summer dress" },
    { id: 2, name: "Jeans", description: "Comfortable denim jeans" },
    { id: 3, name: "Shoes", description: "Stylish women's shoes" },
  ];

  return (
    <>
      <h1>Women Category</h1>

      <h2>Available Items</h2>

      {items.map((item) => (
        <div key={item.id}>
          <Link to={`/women/${item.id}`}>
            {item.name}
          </Link>
        </div>
      ))}

      <hr />

      <Outlet context={items} />
    </>
  );
}

export default Women;