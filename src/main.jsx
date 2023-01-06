import React from 'react';
import ReactDOM from 'react-dom/client';
import { CallbackHook } from './06-memos/CallbackHook';
import { MemoHook } from './06-memos/MemoHook';
import { Padre } from './07-tarea-memo/Padre';
import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import './index.css'

//Seccion 11
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    {/* // <React.StrictMode > */}
      <MainApp />
  {/* // </React.StrictMode> */}
  </BrowserRouter>
  
)