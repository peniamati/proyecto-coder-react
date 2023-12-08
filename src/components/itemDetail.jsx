import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";
import Swal from "sweetalert2";

export const ItemDetail = ({ item }) => {
  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid #ccc",
    padding: "20px",
    margin: "auto",
    maxWidth: "350px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "20px",
    color: "white",
  };

  const { onAdd } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    if (item.stock > 0) {
      onAdd(item, quantity);
      item.stock = item.stock - quantity;
    } else {
      Swal.fire("Producto sin stock por el momento");
    }
  };

  return (
    <>
    <h1 className="display-5" style={{ fontFamily: "arial-black"}}>{item.title}</h1>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={containerStyle}>
        <img
          src={item.pictureUrl}
          alt={item.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p style={{ fontSize: "16px" }}>{item.description}</p>
        <p style={{ fontSize: "16px" }}>Precio: ${item.price}</p>
        <h2 style={{ fontSize: "16px" }}>Stock: {item.stock}</h2>
        <ItemCounter onAdd={handleAddToCart} stock={item.stock} initial={1} />
      </div>
    </div>
    </>
  );
};
