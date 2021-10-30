import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  console.log("PRODUCTS: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
