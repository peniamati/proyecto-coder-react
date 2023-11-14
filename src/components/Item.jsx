import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({item}) => {
  return (
    <Card style={{ width: '100%', backgroundColor: 'black', height: '100%', textAlign: 'center'}}>
      <Card.Img variant="top" src={item.pictureUrl} style={{height: '50%', objectFit: 'cover'}}/>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Card.Title style={{color: 'white'}}>{item.title}</Card.Title>
        <Card.Text style={{color: 'white'}}>
          {item.description}
        </Card.Text>
        <Link to={`/items/${item.id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}