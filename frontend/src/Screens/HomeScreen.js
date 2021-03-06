import React, { useState, useEffect } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
  // react hook
  // const [products, setProduct] = useState([]); // default value is empty array
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  // fetch data from server
  useEffect(() => {
    dispatch(listProducts());
    /*
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }
    fetchData();
    */
    return () => {
      //
    };
  }, [])

    return (
    loading? <div>Loading...</div> :
    error? <div>{error}</div> :
    // if not loading, show list of products
    <ul className="products">
    {
      products.map(product => 
        <li key={product._id}> 
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
  )
};
  

export default HomeScreen;