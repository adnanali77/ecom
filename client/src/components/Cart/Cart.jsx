import './Cart.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from '../../Service/api.js';

const Cart = () => {
    const [product, setproduct] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      getAllProducts();
    }, []);
  
    const getAllProducts = async () => {
      let response = await getProduct(id);
      setproduct(response.data);
    }

  return (
    <div key={product.id}>
        <h1>{product.id}</h1>
        {/* { product && Object.keys(product).length &&
        <h2>{product.title.longTitle}</h2>
        // <img src={product.detailUrl} alt='product'/>
        // <span><strike>₹{product.price.mrp}</strike></span>
        // <span>{product.price.discount} off</span>
        } */}
    </div>
  )
}

export default Cart;