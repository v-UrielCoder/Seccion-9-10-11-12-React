import React from 'react';
import ReactDOM from 'react-dom/client';
import { CallbackHook } from './06-memos/CallbackHook';
import { MemoHook } from './06-memos/MemoHook';
import { Padre } from './07-tarea-memo/Padre';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode >
    <CallbackHook />
  // </React.StrictMode>
)