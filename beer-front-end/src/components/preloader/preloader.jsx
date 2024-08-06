import React from 'react';

export const PreLoader = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: props.size ? null : '100vh' }}>
    <svg width={props.size || '120'} height={props.size || '120'} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#FF9F24">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" />
          </path>
        </g>
      </g>
    </svg>
  </div>
);
export default PreLoader;
