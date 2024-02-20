import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'

import { store } from './store';
// import App from './App.jsx'
// import { PokemonApp } from './PokemonApp.jsx';
import { TodoApp } from './TodoApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>,
)
