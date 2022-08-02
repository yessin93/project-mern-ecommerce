import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../redux/action';
import ProductCard from './ProductCard';



const ProductList = () => {
  const dispatch = useDispatch();
  const {products, loading} = useSelector((state) => state.productReducer);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <h1> loading... </h1>
      ) : (
        <div >
          {products.map((el, i) => (
            <ProductCard product={el} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;