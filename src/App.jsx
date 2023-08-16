
// import { Provider } from 'react-redux';
// import store from './features/store';
// import TaskList from './features/TaskList';
// import AddTaskForm from './features/AddTaskForm';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <h1>Управление задачами с Redux</h1>
//         <AddTaskForm />
//         <TaskList />
//       </div>
//     </Provider>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { addUser } from './features/UsersStore';
import { useDispatch } from 'react-redux';



function App() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isSigned, setIsSigned] = useState(true);
    const users = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(users);



    const handleClickLogIn = () => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].login === login) {
          if (users[i].password === password) {
            alert('You logged in successfully!');
            return;
          }
           else {
             alert('Invalid password, '+users[i].login);
           return;
           }
        } 
        
      }
      alert('You don\'t have an account yet')
      setLogin('');
      setPassword('');
      setIsSigned(false);
    }

    const handleClickSignUp = () => {
      dispatch(addUser({id: Date.now(), login: login, password: password}));
      alert('sdf')
      setLogin('');
      setPassword('');
      setIsSigned(true);
    }
  return (
    <>
        <div className="auto-window">
          <div className="container">

                <span className='text'>Hello, Welcome again!</span> <br />
                <div className="inputs">
                  <input 
                    type="text"
                    className='input'
                    placeholder='login...'
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                  />
                  <input 
                    type="password"
                    className='input'
                    placeholder='password...'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="submittion">
                  {
                    isSigned ? <button type='submit' onClick={handleClickLogIn}>LOG IN</button> :
                    <button type='submit' onClick={handleClickSignUp}>SIGN UP</button>
                  }
                  {isSigned ? 
                  <a href="#" onClick={() => setIsSigned(prev => !prev)}><span><u>Dont have an account? Sign up</u></span></a> : 
                  <a href="#" onClick={() => setIsSigned(prev => !prev)}><span><u>Already have an account? Log in</u></span></a>
                  } <br /> <br />            
                </div>
          </div>
        </div>
    </>
  )
}

export default App

