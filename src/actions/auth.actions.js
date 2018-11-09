import Axios from 'axios';
import { url } from '../lib/url';

const register = `${url}auth/register`;
const sign_in = `${url}auth/sign_in`;
const logout = `${url}auth/logout`;
const forgot = `${url}auth/forgot`;
const reset = `${url}auth/reset`;
const editpass = `${url}auth/editpass`;
const editemail = `${url}auth/editemail`;

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FORGOT_PASS = 'FORGOT_PASS';
export const RESET_PASS = 'RESET_PASS';
export const EDIT_PASSWORD = 'EDIT_PASSWORD';
export const EDIT_EMAIL = 'EDIT_EMAIL';
export const LOAD_USER = 'LOAD_USER';
export const ERROR = 'ERROR';

const headers = () => ({
  'access-token': localStorage.getItem('access-token'),
  uid: localStorage.getItem('uid'),
  client: localStorage.getItem('client'),
  id: localStorage.getItem('id')
});
const storeCredentials = (headers, data) => {
  localStorage.setItem('access-token', headers['access-token']);
  localStorage.setItem('uid', headers.uid);
  localStorage.setItem('client', headers.client);
  localStorage.setItem('id', data.id);
};

// const Request = {authenticate(email, password) {
//     // console.log(email, password);
//     return axios({
//       method: 'post',
//       url: `${url}/auth/sign_in`,
//       data: `email=${email}&password=${password}`,
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//     });
//   },

export const loginUser = (userCreds) => {
  console.log(userCreds);
  console.log(userCreds.email);
  return (dispatch) => {
    return Axios({
      method: 'post',
      url: sign_in,
      data: `email=${userCreds.email}&password=${userCreds.password}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then((response) => {
      const { headers, data: { data } } = response;
      storeCredentials(headers, data);
      console.log(headers, "HEAD ACTION");
      console.log(data, "DAYA ACTION");
      dispatch({
        type: LOGIN_USER,
        userDetails: response.data
      });
    })
    .catch((err) => {
      console.log("err");
      dispatch({
        type: ERROR,
        error: 'invalid user name or password'
      });
    });
  };
};