import Head from 'next/head'
import NewProductForm from '../components/NewProductForm';

export const addProduct = () => {
  return (
    <div>
        <Head>
            <title>Add New Product</title>
        </Head>
        <h1>Add New Product</h1>
        <NewProductForm />
        
    </div>
  )
}

export default addProduct;
