import Button from 'react-bootstrap/Button';

export const ItemDetail = ({ item }) => {
  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #ccc', 
    padding: '20px', 
    margin: 'auto', 
    maxWidth: '350px',
    textAlign: 'center', 
  };

  const titleStyle = {
    fontSize: '20px',
    color: 'white',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>{item.title}</h1>
        <img src={item.pictureUrl} alt={item.title} style={{ maxWidth: '100%', height: 'auto' }} />
        <p style={{ fontSize: '14px' }}>{item.description}</p>
        <p style={{ fontSize: '12px' }}>PRECIO: ${item.price}</p>
        <Button variant="primary" style={{ marginRight: '10px' }}>-</Button>
        <Button variant="primary">Comprar</Button>
        <Button variant="primary" style={{ marginLeft: '10px' }}>+</Button>
      </div>
    </div>
  );
};
