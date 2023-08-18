import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import usersStore from './features/UsersStore';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={usersStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
