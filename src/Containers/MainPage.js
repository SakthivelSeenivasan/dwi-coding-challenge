import React from 'react';
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import ProductDetails from '../Components/ProductDetails';
import ZipCode from '../Components/ZipCode';
import SectionContent from '../Components/Section';

export default () => {
  return (
    <div className="container">
      <Header />
      <Slider />
      <section>
        <SectionContent />
        <br />
        <ProductDetails />
        <ZipCode />
        <br />
        <button type="button" className="Confirm__Button">
          Confirm Order
        </button>
      </section>
    </div>
  );
};
