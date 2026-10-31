import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();

  const items = useOutletContext();

  const item = items.find(
    (item) => item.id === Number(itemId)
  );

  if (!item) {
    return <h2>Item Not Found!</h2>;
  }

  return (
    <>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </>
  );
}

export default ItemDetails;