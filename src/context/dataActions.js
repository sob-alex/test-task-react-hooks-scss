import { ADD_AVATAR, ADD_TERMINAL, DELETE_TERMINAL } from "./types";

export const addAvatar = (avatarUrl) =>({type: ADD_AVATAR, payload: avatarUrl})
export const addTerminal = (terminal) =>({type: ADD_TERMINAL, payload: terminal})
export const deleteTerminal = (id) =>({type: DELETE_TERMINAL, payload: id})