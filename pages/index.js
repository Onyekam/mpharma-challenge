import Head from 'next/head'
import Image from 'next/image'
import ProductList from '../components/ProductList';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../state/slices/productSlice';
import { wrapper } from '../state/store';
export default function Home() {
  const dispatch = useDispatch();
  // const products = useSelector(state => state.products.products);
  const isLoading = useSelector(state => state.products.isLoading);
  const isPresent = useSelector(state => state.products.isPresent);

  // const count = useSelector((state) => state.products.value);
  // const products2 = useSelector((state) => state.products.products);

  {isPresent ? '' : 
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
}

  
  // console.log(products['products'])
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
