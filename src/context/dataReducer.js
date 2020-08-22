import { ADD_AVATAR, ADD_TERMINAL, DELETE_TERMINAL } from './types';

export const dataReducer = (state, action) => {
  switch (action.type) {
    case ADD_AVATAR:
      return { ...state, avatarUrl: action.payload };
    case ADD_TERMINAL:
      return { ...state, terminals: [...state.terminals, action.payload] };
    case DELETE_TERMINAL:
      return {
        ...state,
        terminals: state.terminals.filter((terminal) => terminal.id !== action.payload),
      };
  }
};
