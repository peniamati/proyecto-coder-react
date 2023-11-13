// importo lo necesario para realizar el filtrado y lo requerido en la pre-entrega
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ItemList } from '../components/ItemList';

export const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [greeting, setGreeting] = useState('Productos');

  useEffect(() => {
    const fetchData = () => {
      try {
        // Simula una carga de datos con setTimeout
        setTimeout(() => {
          let filteredProducts = products;
  
          if (id && id !== 'all') {
            filteredProducts = products.filter(item => item.category === id);
            setGreeting(id.charAt(0).toUpperCase() + id.slice(1));
          } else {
            setGreeting('Productos');
          }
  
          setItems(filteredProducts);
        }, 2000); // Simulación de retraso de 2000 milisegundos (2 segundos)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    // recorre y le asigna al h1 el saldudo de la seccion en la que se encuentra
    fetchData();
  }, [id]);

  return (
    <div className='mt-3'>
      <h1 style={{paddingTop: '2rem', textAlign: 'center'}}>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};