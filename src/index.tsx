import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import '../src/components/css/style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Provider } from 'react-redux';
import store from './components/app/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>
);

