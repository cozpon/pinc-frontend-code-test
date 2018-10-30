import Axios from 'axios';
import { url } from '../lib/url';

export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const ERROR = 'ERROR';

// creating a GET action that calls all MESSAGEs
export const loadMessages = () => {
  return (dispatch) => {
    return Axios.get(url)
    .then(messages => {
      let dispatchData = messages.data.data;
      dispatch({
        type: LOAD_MESSAGES,
        messages: dispatchData
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