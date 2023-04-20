import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App tab="home"/>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

