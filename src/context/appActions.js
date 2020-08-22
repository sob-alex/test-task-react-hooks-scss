import { SHOW_AUTHORIZATION_MESSAGE, HIDE_AUTHORIZATION_COMPONENT, SHOW_AUTHORIZATION_ERROR_MODAL, HIDE_AUTHORIZATION_ERROR_MODAL } from "./types"

export const showAuthorizationMessage = () => ({type: SHOW_AUTHORIZATION_MESSAGE})
export const hideAuthorizationComponent = () =>({type: HIDE_AUTHORIZATION_COMPONENT})

export const showAuthorizationErrorModal = () =>({type: SHOW_AUTHORIZATION_ERROR_MODAL})
export const hideAuthorizationErrorModal = () =>({type: HIDE_AUTHORIZATION_ERROR_MODAL})
 