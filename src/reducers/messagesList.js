import { LOAD_MESSAGES } from '../actions/message.actions';

const initialState = [];

const messageslist = (state = initialState, action) => {
  switch (action.type){                   // using a SWITCH CASE allows for different action.types to come in
    case LOAD_MESSAGES:                    // the LOAD_MESSAGES type comes in from ACTIONS folder message.actions.js
      return [ ...action.items ];   // it tells us how to treat the case, and what to do with the data from the database
    // case CREATE_MESSAGE:
    //   return [ ...state, action.item ];
    // case TOGGLE_STATUS:
    //   let index = state.findIndex((item) => {
    //     return item.id === action.item.id;
    //   });
    //   return [ ...(state.slice(0, index)), action.item, ...(state.slice((index + 1), state.length)) ]; //otherwise get duplicate
    // case DELETE_MESSAGE:
    //   let deleteRemoved = state.filter((item) => {
    //     return item.id !== action.item.id;
    //   });
    //   return [ ...deleteRemoved ];
    default:
      return state; // always have a default return state if action.type isn't recognized
  }
};

export default messageslist;

