import { LOAD_MESSAGES } from '../actions/message.actions';

const initialState = [];
// initial state set as an array,
// instead of doing Object.assign({}, state, etc..).
// I think it's a cleaner way of using a spread operator.

const messagesList = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_MESSAGES:
      return [ ...action.messages ];
    default:
      return state;
// default simply returns state if the action.type isn't recognized.
  }
};

export default messagesList;
