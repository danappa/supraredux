import { Card,Button } from "react-bootstrap";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from "../store/cartSlice";
import Dropdown from 'react-bootstrap/Dropdown';


const Cart = () => {
  const products=useSelector(state=>state.cart);
   const dispatch=useDispatch();

  if (products.length === 0) {
    return <div>No products in the cart</div>;
  }

  const removeCart=(id) =>{
    dispatch(remove(id))
    console.log('remove(id) : ', id )
  }

  console.log(products)
  const cards=products.map((product) =>
  <div  key={product.product.id} className="col-md-3" style={{marginBottom:'10px'}}>
  <Card className="h-100">
    <div className="text-center">
    <Card.Img variant="top" src={product.product.image} style={{width:'100px',height:'130px'}} />
    </div>
  <Card.Body>
    <Card.Title>{product.product.title}</Card.Title>
    <Card.Text>INR : {product.product.price}</Card.Text>
  </Card.Body>
  <Card.Footer style={{background:'white',textAlign:'center '}}>
  <Button variant="primary"onClick={()=>removeCart(product.product.id)} >Remove cart</Button>
  </Card.Footer>
</Card>
</div>
);

  return (
    <div className="row">
    {cards}
    </div>
  );
}

export default Cart;



