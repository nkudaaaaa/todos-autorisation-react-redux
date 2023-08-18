import { useState } from 'react';
import '../css/Autorisation.css'
import { useSelector } from 'react-redux';
import { addUser } from '../features/UsersStore';
import { useDispatch } from 'react-redux';



function Autorisation({ onLogin }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isSigned, setIsSigned] = useState(true);

    const users = useSelector(state => state);

    const dispatch = useDispatch();




    const handleClickLogIn = () => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].login === login) {
          if (users[i].password === password) {
            alert('You logged in successfully!');
            onLogin();
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
      alert('You registred successfully');
      setLogin('');
      setPassword('');
      setIsSigned(true);
    }

    const handleTip = () => {
      setIsSigned(prev => {
        console.log("Previous value:", prev);
        const newValue = !prev;
        console.log("New value:", newValue);
        return newValue;
      });
      setLogin('');
      setPassword('');
    }
    const handleOnKeyDown = (e) => {
      if (e.key === 'Enter') {
        if(isSigned) 
          handleClickLogIn();
        else
          handleClickSignUp();
      }
    }

  return (
    <div className="app">
        <div className="auto-window">
          <div className="container">
                <span className='text'>{isSigned ? 'hello, welome again!': 'registration'}</span> <br />
                <div className="inputs">
                  <input 
                    type="text"
                    className='input-autor'
                    placeholder='login...'
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    onKeyDown={handleOnKeyDown}
                  />
                  <input 
                    type="password"
                    className='input-autor'
                    placeholder='password...'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={handleOnKeyDown}
                  />
                </div>
                <div className="submittion">
                  {
                    isSigned ? <button type='submit' className='button-autor' onClick={handleClickLogIn}>LOG IN</button> :
                    <button type='submit' className='button-autor' onClick={handleClickSignUp}>SIGN UP</button>
                  }
                  {isSigned ? 
                  <button className='button-no-backgr' onClick={handleTip}><span><u>Dont have an account? Sign up</u></span></button> : 
                  <button className='button-no-backgr' onClick={handleTip}><span><u>Already have an account? Log in</u></span></button>
                  } <br /> <br />            
                </div>
          </div>
        </div>

    </div>
  )
}


export default Autorisation;