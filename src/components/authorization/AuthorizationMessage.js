import React from 'react';

const AuthorizationMessage = ({ validationsParams }) => {

  const createClassChooser = (validParams)=> (name) => {
    switch (name) {
      case 'letter':
        return validParams.hasPasswordSmallLetter ? 'valid' : 'invalid';
      case 'capital':
        return validParams.hasPasswordCapitalLetter ? 'valid' : 'invalid';
      case 'number':
        return validParams.hasPasswordNumber ? 'valid' : 'invalid';
      case 'length':
        return validParams.hasPasswordEnoughLength ? 'valid' : 'invalid';
    }
  };

  const chooseClass = createClassChooser(validationsParams);

  return (
    <div className="autoruzation__message">
      <h3>Пароль должен содержать следующее:</h3>
      <p className={chooseClass('letter')}>
        <b>Строчную</b> латинскую букву
      </p>
      <p className={chooseClass('capital')}>
        <b>Прописную</b> латинскую букву
      </p>
      <p className={chooseClass('number')}>
        <b>Цифру</b>
      </p>
      <p className={chooseClass('length')}>
        Минимум <b>8 знаков</b>
      </p>
    </div>
  );
};

export default AuthorizationMessage;
