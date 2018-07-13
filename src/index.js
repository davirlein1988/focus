import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
/*
function Square(props) {
  console.log(props)
      return (
      <button className="square" onClick={function() { alert('click'); }}>
        {props.value}
      </button>
    );
}
*/