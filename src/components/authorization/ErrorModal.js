import React, {useContext} from 'react';
import { AppContext } from '../../context/appContext';

const ErrorModal = ({message}) => {
    const {HideAuthorizationErrorModal} = useContext(AppContext);
    if(message === 'Request failed with status code 404'){
        message = 'Пользователь не найден'
    }
  return (
    <div id="myModal" className="authorization__error-modal">
      <div className="authorization__error-modal-content">
        <span className="close" onClick={()=>HideAuthorizationErrorModal()}>&times;</span>
        <h2>Ошибка</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;
