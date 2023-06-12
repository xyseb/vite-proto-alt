import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App: React.FC = () => {
  return <>
    <h1>Hello, React with TypeScript!</h1>
  </>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);