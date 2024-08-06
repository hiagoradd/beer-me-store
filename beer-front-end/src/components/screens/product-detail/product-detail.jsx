import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './product-detail.scss';
import PreLoader from '../../preloader/preloader';
import { AppBody } from '../../layout/layout';

function ProductDetail() {
  const { productData: paramsData } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSku, setSelectedSku] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // const data = location.state.product || {
    //   id: 127,
    //   brand: "Modelo Especial",
    //   image: "/products/modelo-especial.jpeg",
    //   style: "Lager",
    //   substyle: "Light Lager",
    //   abv: "4.4%",
    //   origin: "Import",
    //   information: "#2 selling imported beer in the US with nearly 60 million cases in annual sales (2), growing more than 15 million cases over the past 2 years (3). A full flavored Mexican lager consistently delivering a crisp, clean taste that has stood the test of time for 90 years. Modelo Especial embodies substance with style - a straightforward, uncomplicated and consistent experience with an understated style.\nModelo Especial earned the 2012 Market Watch \"Beer Brand of the Year\" due to 20 straight years of double-digit growth earning.",
    //   skus: [
    //     {
    //       code: "10167",
    //       name: "12 - 24oz Cans",
    //     },
    //     {
    //       code: "10166",
    //       name: "18 - 12oz Cans",
    //     },
    //     {
    //       code: "10170",
    //       name: "Half Barrel",
    //     },
    //   ],
    // };
    setProduct(location.state.product);
  }, [location.state.product]);

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
                <div className={'price'}>${(34.443).toFixed(2)}</div>
              </div>
              <div className={'sub-info light-text'}>
                Origin: {product.origin} | Stock: {123}
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