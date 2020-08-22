import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../context/appContext';
import AuthorizationMessage from './AuthorizationMessage';
import axios from 'axios';
import ErrorModal from './ErrorModal';
import { DataContext } from '../../context/dataContext';

const Authorization = () => {

  const {
    state,
    ShowAuthorizationMessage,
    HideAuthorizationComponent,
    ShowAuthorizationErrorModal,
  } = useContext(AppContext);

  const {AddAvatar} = useContext(DataContext);

  const firstRender = useRef(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('https://api.github.com/users/');
  const [error, setError] = useState(null);
  const [validationsParams, setValidationsParams] = useState({
    hasPasswordSmallLetter: false,
    hasPasswordCapitalLetter: false,
    hasPasswordNumber: false,
    hasPasswordEnoughLength: false,
  });

  

  const handleLoginChange = (e) => {
    const login = e.target.value.trim();
    setLogin(login);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);

    const hasSmallLetter = password.match(/[a-z]/g);
    const hasCapitalLetter = password.match(/[A-Z]/g);
    const hasPasswordNumber = password.match(/[0-9]/g);
    const hasEnoughLength = password.length >= 8;
    setValidationsParams((state) => ({ ...state, hasPasswordSmallLetter: hasSmallLetter }));
    setValidationsParams((state) => ({ ...state, hasPasswordCapitalLetter: hasCapitalLetter }));
    setValidationsParams((state) => ({ ...state, hasPasswordNumber: hasPasswordNumber }));
    setValidationsParams((state) => ({ ...state, hasPasswordEnoughLength: hasEnoughLength }));
  };

  const handlePasswordFocus = (e) => {
    ShowAuthorizationMessage();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUrl(`https://api.github.com/users/${login}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (firstRender.current) firstRender.current = false;
      else {
        try {
        
          const result = await axios(url);
          console.log(result.data);
          AddAvatar(result.data.avatar_url);
          HideAuthorizationComponent();
        } catch (e) {
          console.log(e.message);
          setError(e.message);
          ShowAuthorizationErrorModal();
         
        }

       
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="autoruzation">
      <div className="autoruzation__inner">
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Логин</label>
          <input
            onChange={handleLoginChange}
            type="text"
            name="login"
            placeholder="Введите логин.."
            value={login}
            required
          />

          <label htmlFor="password">Пароль</label>
          <input
            onChange={handlePassword}
            onFocus={handlePasswordFocus}
            type="password"
            name="password"
            title="Пароль должен содержать как минимум одну цифру, прописную и строчную букву и быть длиной не менее 8 знаков"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            placeholder="Введите пароль.."
            required
          />

          <input type="submit" value="Submit" />
        </form>

        {state.isAutoruzationMessageShown ? (
          <AuthorizationMessage validationsParams={validationsParams} />
        ) : null}
        {state.isAutoruzationErrorModalShown ? <ErrorModal message={error} /> : null}
      </div>
    </div>
  );
};

export default Authorization;
