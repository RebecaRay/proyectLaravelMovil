import ReactDOM from 'react-dom/client';
import MainInicial from './components/MainInicial';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { ContextProvider } from './Context';

ReactDOM.createRoot(document.getElementById('app')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <MainInicial />
      </ContextProvider>
    </BrowserRouter>
  //</React.StrictMode>
);