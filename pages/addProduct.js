import Head from 'next/head'
import NewProductForm from '../components/NewProductForm';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';

export default function addProduct() {
  const count = useSelector((state) => state.products.value);
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div>
        <Head>
            <title>Add New Product</title>
        </Head>
        <h1>Add New Product</h1>
       
       
        <NewProductForm />
        
    </div>
  );
}


