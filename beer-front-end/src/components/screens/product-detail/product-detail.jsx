import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsList } from '../../../config/actions';

function ProductDetail() {
  const { productData: paramsData } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = paramsData.split('-');
    const newProduct = {
      id: parseInt(data[0]),
      brandName: data[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    };
    setProduct(newProduct);
  }, []);

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
}

export default ProductDetail;