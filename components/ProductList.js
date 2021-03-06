import productStyles from '../styles/Product.module.css'
import ProductItem from './ProductItem'
import {useSelector, useDispatch} from 'react-redux';


const ProductList = () => {
    const {products} = useSelector(state => state.products.products);
    const isLoading = useSelector(state => state.products.isLoading);
  console.log(products);
  return (
     <div className={productStyles.grid}>
      {isLoading ? "Products Loading" : products.map((product) => (
         <ProductItem product={product} key={product.id}/>
        ))}
         
    </div>
  )
}

export default ProductList