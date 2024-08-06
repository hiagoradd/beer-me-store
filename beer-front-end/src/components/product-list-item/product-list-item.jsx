// 
import React from 'react';
import './product-list-item.scss';

function ProductListItem(props) {
  const { product, onAddClicked } = props;

  return (
    <div className={'product-list-item'}>
      <div className='inner-content'>
        <h3>{product.brand}</h3>
        <div className={'img-container'}>
          <img src={`/assets/${product.image}`} alt={product.brand} />
        </div>
        <div className='bottom-container'>
          <div className={'price'}>
            ${(product.minPrice / 100).toFixed(2)}
          </div>
          <div className={'add-button'} onClick={() => onAddClicked()}>
            <img src={'assets/icons/add.svg'} alt={'+'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;