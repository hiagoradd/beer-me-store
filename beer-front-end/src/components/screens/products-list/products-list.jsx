import React, { useEffect } from 'react';
import './products-list.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../../../config/actions';
import PreLoader from '../../preloader/preloader';
import ProductListItem from '../../product-list-item/product-list-item';
import { AppBody } from '../../layout/layout';
import { useNavigate } from 'react-router-dom';

function ProductsList (props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productsList, user } = useSelector(state => ({
    productsList: state.productsList,
    user: state.user
  }));

  useEffect(() => {
    dispatch(fetchProductsList())
  }, [dispatch]);

  const onItemAddClicked = (item) => {
    const brandName = item.brand.toLowerCase().replace(' ', '-');
    navigate(`/product/${item.id}-${brandName}`, { state: { product: item } });
  };

  return (
    <AppBody>
      <div className="products-list">
        <div className='list-header'>
          <span className='light-sub-text'>Hi {user.style}. {user.name},</span>
          <h1>Welcome back!</h1>
          <h2>Our products</h2>
        </div>
        <div className='list-items-wrapper'>
          {productsList == null ? <PreLoader /> : productsList.map((item, index) => (
            <ProductListItem key={index} product={item} onAddClicked={() => onItemAddClicked(item)} />
          ))}
        </div>
      </div>
    </AppBody>
  );
};

export default ProductsList;
