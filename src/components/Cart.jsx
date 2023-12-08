import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout.jsx";
import Trashcan from "../assets/trashcan.webp";

export const Cart = () => {
  const { clear, items, onRemove } = useContext(CartContext);
  const navigate = useNavigate();
  const total = items.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.quantity * valorActual.price,
    0
  );

  if (!items.length) {
    return (
      <Container className="mt-4">
        <h2 style={{ fontSize: "40px" }}>Su carro está vacío</h2>
        <br />
        <button
          style={{
            fontWeight: 400,
            color: "white",
            backgroundColor: "black",
            fontSize: "20px",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/")}
        >
          Volver a Inicio
        </button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1>Confirme su compra</h1>
      <Table>
        <thead> 
          <tr>
            <th style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Nombre</th>
            <th style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Cantidad</th>
            <th style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Imagen</th>
            <th style={{textAlign: "end", backgroundColor: "black", color: "white"}}>Precio</th>
            <th style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr style={{ height: "150px"}} key={item.id}>
              <td style={{ fontSize: "26px", textAlign: "center", verticalAlign: "middle", backgroundColor: "black", color: "white" }}>{item.title}</td>
              <td style={{ fontSize: "26px", textAlign: "center", verticalAlign: "middle", backgroundColor: "black", color: "white"}}>{item.quantity}</td>
              <td style={{ textAlign: "center", verticalAlign: "middle", backgroundColor: "black", color: "white" }}>
                <img src={item.pictureUrl} width={120} alt={item.title} />
              </td>
              <td style={{ fontSize: "26px", textAlign: "end", verticalAlign: "middle", backgroundColor: "black", color: "white"}}>${item.price}</td>
              <td style={{textAlign: "center", verticalAlign: "middle", backgroundColor: "black", color: "white"}}>
                <img
                  src={Trashcan}
                  alt="Trashcan"
                  style={{ width: "70px", height: "70px", cursor: "pointer" }}
                  onClick={() => onRemove(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot style={{ display: "flex", textAlign: "end", width: "fit-content"}}>
          <tr>
            <td style={{ fontSize: "30px", backgroundColor: "black", color: "white"}}>Total: ${total} </td>
          </tr>
        </tfoot>
      </Table>
      <button
        style={{
          fontWeight: 400,
          color: "white",
          backgroundColor: "black",
          fontSize: "20px",
          borderRadius: "8px",
        }}
        onClick={clear}
      >
        Eliminar Todos
      </button>
      <hr />
      <Checkout total={total} clear={clear} items={items} />
    </Container>
  );
};