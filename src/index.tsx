import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App/App';
import { store } from './store';


const container: HTMLElement = document.getElementById('root') as HTMLElement;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
