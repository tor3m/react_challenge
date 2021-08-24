import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename={'/react_challenge'}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
