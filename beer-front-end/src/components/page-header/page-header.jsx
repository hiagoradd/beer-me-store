import React from 'react';
import './page-header.scss';

function PageHeader() {
  return (
    <div className='page-header'>
      <div className='inner-container'>
        <img className='menu-icon' src={'/assets/icons/menu-icon.svg'} alt={'menu'} />
        <img className='perfil-picture' src={'/assets/icons/profile-picture.jpg'} alt={'profile-picture'} />
      </div>
    </div>
  );
}

export default PageHeader;