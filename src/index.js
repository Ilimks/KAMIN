import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { ThemeProvider } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
         <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);


