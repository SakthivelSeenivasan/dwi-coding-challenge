import React, { useEffect, useRef, useState } from 'react';

export default () => {
  const [msg, setMsg] = useState('none');
  const [loader, setLoader] = useState(false);
  const [zipDetails, setZipDetails] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef();
  useEffect(() => {
    setZipDetails('');
    setError('');
    setMsg('');
    if (userInput) {
      setTimeout(() => {
        //const query = userInput.length == 0 ? '0' : userInput;
        if (userInput === inputRef.current.value) {
          setLoader(true);
          fetch('https://www.wsjwine.com/api/address/zipcode/' + userInput)
            .then((res) => res.json())
            .then((response) => {
              console.log(response);
              if (response.statusCode == 0) {
                setZipDetails(response);
                setMsg(response.response.stateCreateMsg);
              } else if (response.statusCode == 422) {
                console.log(response.statusMessage);
                setError(response.statusMessage);
              }
              setLoader(false);
            })
            .catch((err) => {
              console.log(err);
              setError(err.message);
            });
        }
      }, 500);
    }
  }, [userInput]);
  return (
    <>
      <div style={{ width: '50%', display: 'inline-block' }}>
        <div
          style={{
            fontSize: '18px',
            color: '#000',
            borderBottom: '1px solid #ccc',
            marginBottom: '15px',
            marginTop: '15px',
          }}
        >
          <b style={{ color: '#bdbdbd' }}>Step 2: </b>Where Would You Like Your
          Wine Delivered?
        </div>
        <div>
          <label>
            <span style={{ color: 'red' }}>*</span> Zip Code
          </label>
          <br />
          <input
            ref={inputRef}
            type="text"
            maxLength="5"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            style={{ margin: '10px', float: 'left' }}
          />
          {zipDetails !== '' ? (
            <div style={{ float: 'left', marginTop: '10px' }}>
              {zipDetails.response.city}, {zipDetails.response.stateName}
            </div>
          ) : (
            ''
          )}
          <div
            className="loader Float__Left"
            style={{ display: loader ? 'block' : 'none' }}
          ></div>
        </div>
        <br />

        <div
          className="error__message__Content"
          style={{ display: error != '' ? 'block' : 'none' }}
        >
          {error}
        </div>

        <div>
          <div
            className="success__message__Content"
            style={{ display: msg != '' ? 'block' : 'none' }}
          >
            {msg}
          </div>
        </div>
      </div>
    </>
  );
};
