
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './components/product-detail/product-detail';
import ProductsList from './components/products-list/products-list';

// const ProductsList = Loadable({
//   loader: () => import(/* webpackChunkName: "myProfile" */ 'app/modules/my-profile'),
//   loading: () => <PreLoader />
// });


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:productData" element={<ProductDetail />} />
          {/* <Route path="*" element={<Navigate to="/products" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
