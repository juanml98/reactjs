import React from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/itemCount";



function Item({imagen, nombre, id, precio, descripcion}) {
    return (
        <Card key={id} style={{ width: '18rem' }}>
       <Card.Img variant="top" src={imagen} />
     <Card.Body>
    <Card.Title><h2>{nombre}</h2></Card.Title>
    <Card.Text>
      <h3>${precio}</h3>
      <Card.Text>{descripcion}
      </Card.Text>
    </Card.Text>
   <ItemCount />
  </Card.Body>
</Card>
    )
}

export default Item