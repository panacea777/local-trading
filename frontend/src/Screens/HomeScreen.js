import React, { useState } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen (props) {

  // react hook
  const [product, setProduct] = useState([]); // default value is empty array

  // fetch data from server
  useEffect(() => {
    effect
    return () => {
      //
    }
  }, [])

    return <ul className="products">
    {
      data.products.map(product => 
        <li> 
          <div className="product">
          <Link to={'/product/' + product._id}>
              <img className="product-image" src={product.image} alt="product" /></Link>
              <div className="product-name">{product.name}</div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating} Stars {product.numReviews} Reviews </div>
          </div>
       </li>)
      }
  </ul>
}

export default HomeScreen;