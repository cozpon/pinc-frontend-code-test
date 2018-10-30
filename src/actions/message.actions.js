import Axios from 'axios';
import { url } from '../lib/url';

export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const LOAD_MESSAGE = 'LOAD_MESSAGE';
export const ERROR = 'ERROR';

// creating a GET action that calls all MESSAGEs
export const loadMessages = (data) => {
  return (dispatch) => {
    return Axios.get(url)
    .then(messages => {
      console.log(messages);
      let data = messages.data.items;
      dispatch({ // dispatch is for activating a function call before returning an object
        type: LOAD_MESSAGES,  // include "type"
        messages: data // and then a state to be set after XHR request completes.
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
  };
};