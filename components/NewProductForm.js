import {useState} from 'react'
const NewProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const productNameHandler = (event) => {
        setProductName(event.target.value);
    }

    const productPriceHandler = (event) => {
        setProductPrice(event.target.value);
    }
    
    const submitHandler = (event) => {
            console.log(productName+' + '+productPrice);
            event.preventDefault();
    }
  
    return (
    <div>
        <form onSubmit={submitHandler}>
        <div>
            <label>
                Product Name: 
                <input type="text" name="name" value={productName} onChange={productNameHandler} />
            </label>
        </div>
        <div>
            <label>Product Price:
                <input type="text" name="price" value={productPrice} onChange={productPriceHandler} />
            </label>
        </div>
         <div>
            
                <input type="submit" value="Add Product" />
            
        </div>
        </form>

    </div>
  )
}

export default NewProductForm