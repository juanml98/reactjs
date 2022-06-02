import React from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/itemCount";




function Item({imagen, nombre, id, precio, descripcion}) {
    return (

  
        <Card className="row m-4 col-md-5 col-sm-12 col-lg-4" key={id} style={{width: '18rem', display: 'flex', }}>
       <Card.Img variant="top" src={imagen} />
     <Card.Body>
    <Card.Title><h3>{nombre}</h3></Card.Title>
    <Card.Text>
      <h4>${precio}</h4>
      <Card.Text>{descripcion}
      </Card.Text>
    </Card.Text>
   <ItemCount />
  </Card.Body>
</Card>


  )
}

export default Item