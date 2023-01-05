import React from 'react';
import ReactDOM from 'react-dom/client';
import { CallbackHook } from './06-memos/CallbackHook';
import { MemoHook } from './06-memos/MemoHook';
import { Padre } from './07-tarea-memo/Padre';
import { TodoApp } from './08-useReducer/TodoApp';
import './index.css'

// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode >
    <TodoApp />
  // </React.StrictMode>
)