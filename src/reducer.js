export default (state = {}, action) => {
  switch (action.type) {
    case 'HELO':
      return action.payload;      
    break;
  
    default:
      return state
      break;
  }
}
