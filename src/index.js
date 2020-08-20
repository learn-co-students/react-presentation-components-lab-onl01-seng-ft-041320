import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function handleClick(event){
  let div = event.target
  div.innerText === "I am just happy." ? div.innerText = "I am just sad." : div.innerText = "I am just happy."
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById('root')
);