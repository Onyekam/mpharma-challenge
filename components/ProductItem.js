import Link from 'next/link'
import productStyles from '../styles/Product.module.css'
import ProductPriceList from './ProductPriceList'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../state/slices/productSlice'

const ProductItem = ({product}) => {
    const prices = product.prices;
    const latestPrice = prices[prices.length - 1];
    const dispatch = useDispatch();
    const removeProductHandler = (event) => {
        dispatch(removeProduct(event.target.value));
    }
    return (
        <div className={productStyles.card} >
    <Link href="/editProduct/[id]" as={`/editProduct/${product.id}`}>
        <a >
            <h3>{product.name} &rarr;</h3>
            <span><b>Latest Price </b>GHC {latestPrice.price}</span>
            <ProductPriceList productPrices={prices} />
        </a>
    </Link>
    <div>
        <button onClick={removeProductHandler} value={product.name}>remove product</button>
    </div>
    </div>
  )
}

export default ProductItem