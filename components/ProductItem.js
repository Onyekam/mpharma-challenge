import Link from 'next/link'
import productStyles from '../styles/Product.module.css'
import ProductPriceList from './ProductPriceList'

const ProductItem = ({product}) => {
    const prices = product.prices;
    const latestPrice = prices[prices.length - 1];
    // const latestDate = new Date(
    //     Math.max(
    //         ...prices.date.map(price => {
    //             return price);
    //         }),
    //     ),
    // );

    return (
    <Link href="/product/[id]" as={`/product/${product.id}`}>
        <a className={productStyles.card}>
            <h3>{product.name} &rarr;</h3>
            <span><b>Latest Price </b>GHC {latestPrice.price}</span>
            <ProductPriceList productPrices={prices} />
        </a>
    </Link>
  )
}

export default ProductItem