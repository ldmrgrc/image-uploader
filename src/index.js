import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles/index.css';
import { ImageApp } from './ImageApp';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ImageApp />
    </Provider>
  </React.StrictMode>
);
