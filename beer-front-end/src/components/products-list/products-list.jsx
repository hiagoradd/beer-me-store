import React from 'react';
import './products-list.scss';
import { useDispatch } from 'react-redux';
import { fetchProductsList } from '../../config/actions';

function ProductsList () {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProductsList())
  }, []);

  return (
    <div className="products-list">
    </div>
  );
};

export default ProductsList;
