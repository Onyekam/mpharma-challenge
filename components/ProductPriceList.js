const ProductPriceList = ({productPrices}) => {
  return (
    <div>
        <p>Historical Prices:</p>
        {productPrices.map((detail) => (
            <div key={detail.id}><b>GHC {detail.price}</b><aside>Date: {detail.date}</aside> </div>
        ))}
    </div>
  )
}

export default ProductPriceList