import React from 'react'
import { useSelector } from 'react-redux';
import { Card,Button } from "react-bootstrap";



const Kart = () => {
  const products=useSelector(state=>state.kart);

  const cards = products.map((product) =>
    <div className="col-md-3" style={{marginBottom:'10px'}}>
        {console.log(products)}
      <Card key={product.id} className="h-100">
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
        </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>INR : {product.price}</Card.Text>
      </Card.Body>
      <Card.Footer style={{background:'white',textAlign:'center '}}>
      <Button variant="primary">Add to cart</Button>
      </Card.Footer>
    </Card>
    </div>
)

  return (<>
  <div className='row'>{cards}</div>
  </>
  )
}

export default Kart