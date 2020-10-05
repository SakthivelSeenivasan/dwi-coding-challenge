import React, { useEffect, useState } from 'react';

export default () => {
  const [mainItems, setMainItems] = useState('');
  const [itemValue, setItemValue] = useState(0);
  useEffect(() => {
    fetch('https://www.wsjwine.com/api/offer/0033008')
      .then((res) => res.json())
      .then((result) => {
        setMainItems(result.response.mainItems);
        console.log(result);
      });
  }, []);
  const handleProductChange = (event) => {
    console.log(event);
    setItemValue(event);
  };
  if (mainItems !== '') {
    return mainItems.map((item, index) => {
      let Names = item.product.name;
      let splittedName = Names.split('+');
      let Name = splittedName[0].slice(0, -12);
      let Bottles = item.product.skus[0].numberOfBottles;
      let Price = item.product.skus[0].salePrice;
      return (
        <div key={index}>
          <label
            style={{
              marginBottom: '10px',
              display: 'inherit',
              cursor: 'pointer',
            }}
          >
            <input
              type="radio"
              id="pro"
              name="product"
              value={index}
              onChange={(e) => handleProductChange(e.target.value)}
            />
            <span>
              <b>{Name}</b> + {splittedName[1]}
            </span>
            <span>
              <b> Just ${Price}</b>
            </span>
            <span> ( Hurry, left only {Bottles} Bottles )</span>
            <br />
          </label>
        </div>
      );
    });
  } else {
    return <></>;
  }
};
