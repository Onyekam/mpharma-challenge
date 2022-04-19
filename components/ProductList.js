import productStyles from '../styles/Product.module.css'
import ProductItem from './ProductItem'
import {useState} from 'react'

const ProductList = ({products}) => {
   
    //const localProducts = products;
    const [productsState, setProductsState] = useState(products.products);
   
    console.log({productsState});
  return (
    //  <div></div>
     <div className={productStyles.grid}>
         {productsState.map((product) => (
         <ProductItem product={product} key={product.id}/>
       ))}
    </div>
  )
}

export default ProductList