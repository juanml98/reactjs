import React from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/itemCount";
;


function Item({imagen, nombre, id, precio, descripcion}) {
    return (
        <Card key={id} style={{ width: '18rem' }}>
       <Card.Img variant="top" src={imagen} />
     <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      ${precio}
      <Card.Text>{descripcion}
      </Card.Text>
    </Card.Text>
   <ItemCount />
  </Card.Body>
</Card>
    )
}

export default Item