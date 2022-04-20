import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import EditProductForm from '../../components/EditProductForm';
const Details = () => {
  const {products} = useSelector(state => state.products.products);
  const {query} = useRouter();
  const productId = query.id; 
  const productArray = products.filter(product => {
      return product.id == productId;
  });
 
  const product = productArray[0];
  return (
    <div>
      Edit {product.name} Details 
      <EditProductForm product={product}/>

    </div>
    
  )
}

export default Details;