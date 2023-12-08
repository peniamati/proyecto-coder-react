import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ItemList } from "./ItemList";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

const customStyles = {
  greeting: {
    fontFamily: "arial black",
  },
};

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
      ? collection(db, "items")
      : query(collection(db, "items"), where("categoryId", "==", id));

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log(" no results");
      else
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [id]);

  const dynamicGreeting = id ? `${id}` : props.greeting;

  return (
    <Container className="mt-4">
      <h1 style={customStyles.greeting} className="display-5">
        {dynamicGreeting}
      </h1>
      {items.length > 0 ? <ItemList items={items} /> : <>Loading...</>}
    </Container>
  );
};