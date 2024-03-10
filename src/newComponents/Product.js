import { useEffect } from "react"
import { Card,Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import { add }  from "../store/cartSlice";

const Product=()=>{
  const dispatch = useDispatch();
  const {data : products, status} = useSelector(state => state.products);

useEffect(() => {
  dispatch(getProducts());
}, []);

const addToCart=(product) =>{
  dispatch(add(product))
}
console.log('data.product.id test => : ', products.id)

if(status =='loading'){
  return <p> Loading ......  </p>
}
if(status =='error'){
  return <Alert key='danger' variant='danger'> Something went wrong! Try again later......  </Alert>
}

const cards=products.map(product =>
 
    <div className="col-md-3" style={{marginBottom:'10px'}}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
        </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>INR : {product.price}</Card.Text>
      </Card.Body>
      <Card.Footer style={{background:'white',textAlign:'center '}}>
      <Button variant="primary" onClick={()=>addToCart({product})}>Add to cart</Button>
      </Card.Footer>
    </Card>
     </div>
)

    return (
        <>
        <div className="row">
           {cards}
        </div>
        </>
    )
}


export default Product;