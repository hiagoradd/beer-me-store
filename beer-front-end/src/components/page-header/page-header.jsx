import React from 'react';
import './page-header.scss';
import { useLocation, useNavigate } from 'react-router-dom';

function PageHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnDetailView = location.pathname.includes('product/');
  return (
    <div className='page-header'>
      <div className='inner-container'>
        {isOnDetailView ? (
          <>
            <img onClick={() => navigate(-1)} className={'back-icon'} src={'/assets/icons/back-icon.svg'} alt={'<-'} />
            <h5>Detail</h5>
            <img className={'icon-dots'} src={'/assets/icons/icon-dots.svg'} alt={'...'} onClick={() => window.alert('Open details')} />
          </>
        ) : (
          <>
            <img onClick={() => window.alert('Open menu')} className='menu-icon' src={'/assets/icons/menu-icon.svg'} alt={'menu'} />
            <img onClick={() => window.alert('Open profile')} className='perfil-picture' src={'/assets/icons/profile-picture.jpg'} alt={'profile-picture'} />
          </>
        )}
      </div>
    </div>
  );
}

export default PageHeader;