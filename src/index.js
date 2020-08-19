import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

// ReactDOM.render(
//
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const render=()=>
{
    document.getElementById('root').innerHTML = `
    <div>
      Hello HTML
      <input />
      <pre>${new Date().toLocaleTimeString()}</pre>
    </div>
  `;

    ReactDOM.render(
        React.createElement(
            'div',
            null,
            'Hello React',
            React.createElement('input', null),
            React.createElement('pre', null, new Date().toLocaleTimeString())
        ),
        document.getElementById('root')
    );

}

setInterval(render, 1000);


