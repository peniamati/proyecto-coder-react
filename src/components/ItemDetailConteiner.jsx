// importo lo necesario para realizar el filtrado y lo requerido en la pre-entrega
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { ItemDetail } from './itemDetail';
import { products } from '../data/products';

export const ItemDetailConteiner = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    
    mypromise.then((response) => {
      const findById = response.find((item) => item.id === Number(id));
      setItem(findById);
    });
    }, [id]);
    
  return(
    <Container className='mt-4'>
      {item ? <ItemDetail item={item}/> : <> Loading.. </>}
    </Container>
  )
}


