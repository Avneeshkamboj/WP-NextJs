import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from "react";
import { store } from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (<>
  <Provider store={store}>
  <div className='container'>
    <Header />
      <Component {...pageProps} />
      <Footer />
      </div>
      </Provider>
      </>
  )
}

export default MyApp
