import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increment} from "../state/slices/productSlice";
import { addProduct } from '../state/slices/productSlice';
const NewProductForm = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products.products);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const productNameHandler = (event) => {
        setProductName(event.target.value);
    }

    const productPriceHandler = (event) => {
        setProductPrice(event.target.value);
    }
    
    const submitHandler = (event) => {
         event.preventDefault();    
        console.log(productName+' + '+productPrice);
            
            dispatch(addProduct(createNewProductObject(productName, productPrice, products)));
            
            event.preventDefault();
           
    }

    const createNewProductObject = (productName, productPrice, products) => {
        const date = new Date().toISOString();
        const id = products.length + 1;
        const newProduct = {
            id: id,
            name: productName,
            prices: [
                {
                    id: 1,
                    price: Number(productPrice),
                    date: date
                }
            ]
        }
        return newProduct;
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