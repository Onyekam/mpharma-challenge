import Head from 'next/head'
import ProductList from '../components/ProductList';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../state/slices/productSlice';
export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.products.isLoading);
  const isPresent = useSelector(state => state.products.isPresent);

useEffect(() => {
  if(isPresent) {
  } else {
    dispatch(getProducts());
  }
}, []);

return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Welcome to MPharma</h1>
      {/* {count} */}
      {/* <ProductList products={products3} /> */}
      {isLoading ? "Products Loading" : <ProductList />}
      
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`http://www.mocky.io/v2/5c3e15e63500006e003e9795`)
//   const products = await res.json()
  

//   return {
//     props: {
//       products
//     }
//   }
// }
