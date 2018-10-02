import { combineReducers } from 'redux';

import { contactsReducer } from './pages/contacts-model/reducer';

export const Reducers = combineReducers({
  contactsState: contactsReducer,
  // otherState: otherReducer
});



// const Button = ({ children }) =>
//   <button>
//     {children}
//   </button>

// const AlertIcon = () =>
//   <img />

// const AlertButton = ({childen}) =>
//   <Button>{childen}<AlertIcon/></Button>