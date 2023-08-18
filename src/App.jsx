import  Autorisation  from './layouts/Autorisation';
import { Provider } from 'react-redux';
import { useState } from 'react';
import storeUsers from './features/UsersStore';
import './App.css';
import Todos from './layouts/Todos';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }
  
  return (
    <>
    {!isAuthenticated ? <Provider store={storeUsers}>
        <div className="autorisation-main-div">
          <Autorisation onLogin={handleLogin}/>
        </div>
      </Provider> : ''}
      
      <div className="todos-main-div">
        <Todos />
      </div>    
    </>
  )
}
export default App;

