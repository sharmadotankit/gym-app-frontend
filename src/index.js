import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';
import {UserProvider} from "./context/user.context";
import "react-toastify/dist/ReactToastify.css";
import "./common.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
  </React.StrictMode>
);


