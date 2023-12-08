import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import sendEmail from './ContactForm';
import Swal from "sweetalert2";

const initialValues = {
  email: "",
  confirmEmail: "",
  name: "",
  phone: "",
};

const Checkout = ({ total, clear, items }) => {
  const [buyer, setBuyer] = useState(initialValues);
  const [validEmail, setValidEmail] = useState(true);
  const [emailMatch, setEmailMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [name]: value,
    }));

    if (name === "email" || name === "confirmEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValidEmail(emailRegex.test(value));
      if (name === "confirmEmail") {
        setEmailMatch(buyer.email === value);
      }
    }
  };

  const sendOrder = async () => {
    if (!validEmail || !emailMatch || !buyer.name || !buyer.phone) {
      Swal.fire(
        "Por favor, complete todos los campos del formulario y verifique que el correo electrónico sea correcto y coincida."
      );
      return;
    }

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    try {
      const orderRef = await addDoc(orderCollection, {
        buyer,
        items,
        total,
        fecha: new Date(),
      });

      for (const item of items) {
        const itemRef = doc(db, "items", item.id);
        const itemDoc = await getDoc(itemRef);

        if (itemDoc.exists()) {
          const currentStock = itemDoc.data().stock;
          const newStock = currentStock - item.quantity;

          await updateDoc(itemRef, { stock: newStock });
        } else {
          console.error(`No se encontró el item con id ${item.id}`);
        }
      }
      sendEmail(buyer, orderRef.id, items, total);
      Swal.fire(`Su orden ${orderRef.id} ha sido completada`);
      setBuyer(initialValues);
      clear();
      navigate("/");
    } catch (error) {
      console.error("Error al enviar la orden:", error);
    }
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            placeholder="E-mail"
            required
            isInvalid={!validEmail}
          />
          <Form.Control.Feedback type="invalid">
            El correo electrónico no es válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="formConfirmEmail">
          <Form.Label>Confirm Email</Form.Label>
          <Form.Control
            type="email"
            value={buyer.confirmEmail}
            onChange={handleChange}
            name="confirmEmail"
            placeholder="Confirm E-mail"
            required
            isInvalid={!emailMatch}
          />
          <Form.Control.Feedback type="invalid">
            Los correos electrónicos no coinciden.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={buyer.name}
            onChange={handleChange}
            name="name"
            placeholder="Name"
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Phone"
            required
          />
        </Form.Group>
      </Row>
      <Button variant="dark" onClick={sendOrder}>
        Realizar Compra
      </Button>
    </Form>
  );
};

export default Checkout;