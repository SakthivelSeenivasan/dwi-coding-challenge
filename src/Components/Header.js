import React from 'react';
import logo from '../asset/logo.png';
export default () => {
  return (
    <>
      <div className="Header__Logo">
        <img src={logo} width="100%" />
      </div>
      <span style={{ float: 'right', fontSize: '25px', margin: '15px 20px' }}>
        <b>Special Offer Here</b>
      </span>
    </>
  );
};
