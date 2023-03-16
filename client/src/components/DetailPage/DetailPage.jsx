import { useState, useEffect } from "react";
import { getProduct } from '../../Service/api.js';
import './DetailPage.css';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailPage = () => {
  const navigate = useNavigate();
  const [product, setproduct] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    let response = await getProduct(id);
    setproduct(response.data);
  }

  // const addItemToCart = () => {
  //   navigate(`/cart/${{id}}`);
  // }

  return (
    <div key={product.id} className='prbjb'>
      { product && Object.keys(product).length &&
        <div className="pr">
          <div className="detailImg">
            <img src={product.detailUrl} alt='product'/>
            <div className="btnd">
            <Link to={`/cart/${product.id}`}><button className="detailbtn btncart">
              Add to Cart
              </button></Link>
              <button className="detailbtn btnbuy">Buy Now</button>
            </div>
          </div>
          <div className="detailText">
            <h2>{product.title.longTitle}</h2>
            <p>8 Ratings & 1 Reviews <span className="dlogo">EStore.</span></p>
            <p>
              <span className="pcost">₹{product.price.cost}</span>
              <span className="pmrp"><strike>₹{product.price.mrp}</strike></span>
              <span className="pdis">{product.price.discount} off</span>
            </p>
          </div>
        </div>
      }
    </div>
  )
}

export default DetailPage;