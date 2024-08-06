import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './product-detail.scss';
import PreLoader from '../../preloader/preloader';
import { AppBody } from '../../layout/layout';
import { getUpdatedSku } from '../../../config/actions';
import { useDispatch, useSelector } from 'react-redux';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [selectedSku, setSelectedSku] = useState(0);
  const detailedPricing = useSelector(state => state.detailedPricing);
  console.log('🚀 ~ detailedPricing:', detailedPricing);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getUpdatedSku(product.skus[selectedSku].code));
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch, product, selectedSku]);


  useEffect(() => {
    setProduct(location.state.product);
    dispatch(getUpdatedSku(location.state.product.skus[selectedSku].code));
  }, [location.state.product, dispatch, selectedSku]);

  if (!product) return <PreLoader />;

  return (
    <AppBody>
      <div className={'product-detail-container'}>
        <div className={'inner-container'}>
          <div className={'product-img-wrapper'}>
            <img className='product-img' src={`/assets${product.image}`} alt={product.brand} />
          </div>
          <div className={'border-bg'}>
            <div className={'top-content'}>
              <div className={'top-info'}>
                <h6>{product.brand}</h6>
                <div className={'price'}>
                  {detailedPricing.price == null ? <PreLoader size={'20'} /> : `$${(detailedPricing.price / 100).toFixed(2)}`}
                </div>
              </div>
              <div className={'sub-info light-text'}>
                Origin: {product.origin} | Stock: {detailedPricing.stock || '-'}
              </div>
            </div>
            <div className='description'>
              <div className='second-title'>Description</div>
              <p className='light-text'>{product.information}</p>
            </div>
            <div className={'size'}>
              <div className='second-title'>Sizes</div>
              <div className={'sizes-container'}>
                {product.skus.map((sku, index) => (
                  <div key={index} onClick={() => setSelectedSku(index)} className={`size-item ${selectedSku === index && 'selected'}`}>
                    <span>{sku.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={'buying-container'}>
              <img className='add-to-bag' src={`/assets/icons/add-to-bag.svg`} alt={product.brand} />
              <div className={'add-to-cart-button'}>
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppBody>
  );
}

export default ProductDetail;