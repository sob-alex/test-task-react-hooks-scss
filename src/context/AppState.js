import React, { useReducer } from 'react';
import { AppContext } from './appContext';
import { appReducer } from './appReducer';
import {
  showAuthorizationMessage,
  hideAuthorizationComponent,
  hideAuthorizationErrorModal,
  showAuthorizationErrorModal,
} from './appActions';

const AppState = ({ children }) => {
  const initialAppState = {
    isAutoruzationComponentShown: true,
    isAutoruzationMessageShown: false,
    isAutoruzationErrorModalShown: false,
  };

  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const ShowAuthorizationMessage = () => dispatch(showAuthorizationMessage());

  const HideAuthorizationComponent = () => dispatch(hideAuthorizationComponent());

  const HideAuthorizationErrorModal = () => dispatch(hideAuthorizationErrorModal());
  const ShowAuthorizationErrorModal = () => dispatch(showAuthorizationErrorModal());
  const shared = {
    state,
    ShowAuthorizationMessage,
    HideAuthorizationComponent,
    HideAuthorizationErrorModal,
    ShowAuthorizationErrorModal,
  };
  return <AppContext.Provider value={shared}>{children}</AppContext.Provider>;
};

export default AppState;
