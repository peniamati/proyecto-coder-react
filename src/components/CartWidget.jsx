import carrito from "../assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { items } = useContext(CartContext);
  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );
  return (
    <>
      <div style={{ textAlign: "center"}}>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={carrito} alt="carrito de compras" width={50} height={50} />
          <span style={{ color: "white" }}>{total}</span>
        </Link>
      </div>
    </>
  );
};