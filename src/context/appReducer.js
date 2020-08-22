import {
  SHOW_AUTHORIZATION_MESSAGE,
  HIDE_AUTHORIZATION_COMPONENT,
  SHOW_AUTHORIZATION_ERROR_MODAL,
  HIDE_AUTHORIZATION_ERROR_MODAL, 
} from './types';

export const appReducer = (state, action) => {
  switch (action.type) {
    case SHOW_AUTHORIZATION_MESSAGE:
      return { ...state, isAutoruzationMessageShown: true };
    case HIDE_AUTHORIZATION_COMPONENT:
      return { ...state, isAutoruzationComponentShown: false };
    case SHOW_AUTHORIZATION_ERROR_MODAL:
      return { ...state, isAutoruzationErrorModalShown: true };
    case HIDE_AUTHORIZATION_ERROR_MODAL:
      return { ...state, isAutoruzationErrorModalShown: false };
   
  }
};
