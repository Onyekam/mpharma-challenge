import '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import { store } from '../state/store';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../state/slices/productSlice';
function MyApp({ Component, pageProps }) {
  
  return (
 <Provider store={store}>
    <Layout>
     
    <Component {...pageProps} />
     
    </Layout>
     </Provider>
  ) 
}

export default MyApp
