import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';

import { editProduct } from '../state/slices/productSlice';
import { useRouter } from 'next/router';
const EditProductForm = ({product}) => {
    const dispatch = useDispatch();

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const router = useRouter();
    useEffect(() => {
        setProductName(product.name);
        setProductPrice(product.prices[0].price);
    }, []);
   
    const productNameHandler = (event) => {
        setProductName(event.target.value);
    }

    const productPriceHandler = (event) => {
        setProductPrice(event.target.value);
    }
    
    const submitHandler = (event) => {
        console.log(productName+' + '+productPrice);
        dispatch(editProduct(editProductObject(productName, productPrice, product)));
        event.preventDefault();
        router.push('/');
           
    }

    const editProductObject = (productName, productPrice, product) => {
        const date = new Date().toISOString();
        //console.log(products);
        const pricesArray = product.prices;
        const maxValueOfId = Math.max(...pricesArray.map(price => price.id), 1);
        //console.log(maxValueOfId);
        const newProduct = {
            id: product.id,
            name: productName,
            prices: [...pricesArray,
                {
                    id: maxValueOfId + 1,
                    price: Number(productPrice),
                    date: date
                }
            ]
        }
        // router.push('/');
        //console.log(newProduct);
        return newProduct;
    }

  
    return (
    <div>
        <form onSubmit={submitHandler}>
        <div>
            <label>
                Product Name: 
                <input type="text" name="name" defaultValue={product.name} value={productName} onChange={productNameHandler} />
            </label>
        </div>
        <div>
            <label>Product Price:
                <input type="text" name="price" defaultValue={product.price} value={productPrice} onChange={productPriceHandler} />
            </label>
        </div>
         <div>
            
                <input type="submit" value="Edit Product" />
            
        </div>
        </form>
       

    </div>
  )
}

export default EditProductForm