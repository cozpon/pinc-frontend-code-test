import { LOGIN_USER,
         LOGOUT_USER,
         REGISTER_USER,
         LOAD_USER,
         EDIT_EMAIL,
         EDIT_PASSWORD,
         ERROR
       } from '../actions/auth.actions';

const initialState = [];

const singleUser = (state = initialState, action) => {
  switch (action.type){

    case LOGIN_USER:
      console.log(action, "ACTION");
      const userDetails = action.userDetails;
      let newState = {};
      console.log(userDetails.data.id, "REDUCERS");
      newState = action.userDetails;

      localStorage.setItem('loggedIn', true);
      localStorage.setItem('userId', userDetails.data.id);
      localStorage.setItem('username', userDetails.data.attributes.name);
      localStorage.setItem('role', userDetails.data.attributes.account_type);

      return Object.assign({}, state, newState);

    case REGISTER_USER:
      if (action.response.success) {
        localStorage.setItem('registered', true);
      }
      return Object.assign({}, state, initialState);

    case LOGOUT_USER:
      return Object.assign({}, state, initialState);

    case LOAD_USER:
      return Object.assign({}, state, action.user);

    case EDIT_PASSWORD:
      if (action.user.success) {
        localStorage.setItem('passwordChange', true);
      }
      return Object.assign({}, state, action.user);

    case EDIT_EMAIL:
      if (action.user.success) {
        localStorage.setItem('emailChange', true);
      }
      return Object.assign({}, state, action.user);

    case ERROR:
      localStorage.setItem('error', true);
      return Object.assign({}, state, action.type);

    default:
      return state;
  }
};

export default singleUser;