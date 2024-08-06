
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './components/screens/product-detail/product-detail';
import ProductsList from './components/screens/products-list/products-list';
import PageHeader from './components/page-header/page-header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:productData" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
