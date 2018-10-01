import { ADD_CONTACT } from './types';

const initialState = {
  contacts: ['foi com redux']
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.contacts] };
    default:
      return state;
  }
};
