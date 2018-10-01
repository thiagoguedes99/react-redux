import { combineReducers } from 'redux';

import { contactsReducer } from './pages/contacts-model/reducer';

export const Reducers = combineReducers({
  contactsState: contactsReducer,
  // otherState: otherReducer
});
