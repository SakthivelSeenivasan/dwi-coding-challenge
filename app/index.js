import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/style.css';
import MainPage from '../src/Containers/MainPage';
const App = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
