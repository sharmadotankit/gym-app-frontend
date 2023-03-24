import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';
import {UserProvider} from "./context/user.context";
import {ExerciseProvider} from './context/exercise.context';
import "react-toastify/dist/ReactToastify.css";
import "./common.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <ExerciseProvider>
          <App />
        </ExerciseProvider>
      </UserProvider>
  </React.StrictMode>
);


