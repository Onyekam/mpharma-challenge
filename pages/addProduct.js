import Head from 'next/head'
import NewProductForm from '../components/NewProductForm';
import { useSelector } from 'react-redux';

export default function addProduct() {
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


