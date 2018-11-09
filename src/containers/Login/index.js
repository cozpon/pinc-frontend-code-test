import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth.actions';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email : '',
      password : '',
      loggedIn: false, // set initial state to false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      loggedIn: true
    });
    let loginCreds = {
      email : this.state.email,
      password : this.state.password
    };

    this.props.loginUser(loginCreds);
    localStorage.clear();
    console.log(this.props, "props user");
  }

  handleEmailInput(evt) {
    this.setState(
    {
      email : evt.target.value
    });
  }

  handlePasswordInput(evt) {
    this.setState(
    {
      password : evt.target.value
    });
  }

  render() {
    console.log(this.props);
    // loggedIn is a string so its basically checking if anything exists there
    // if(this.props.singleUser.success && localStorage.userId) {
    //   return (
    //     <Redirect to={`/users/${localStorage.userId}`} />
    //   )
    // }
    return(
      <div id="login-container">
        <h2>Login</h2>
        <div className="login-form">
          <form className="inner-form-container" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-header">
            Login with EMAIL
            </div>
         <div>
            <input
              name="email"
              type="text"
              placeholder="email"
              defaultValue={this.state.email}
              onChange={this.handleEmailInput}/>
            </div>

            <div className="form-header">
            PASSWORD
            </div>
            <div>
            <input
              name="password"
              type="password"
              placeholder="password"
              defaultValue={this.state.password}
              onChange={this.handlePasswordInput}/>
            </div>
            <br/>
            <button
              className="login-btn"
              type="submit"
              onClick={this.handleSubmit}>
              Login
            </button>
          </form>
        </div>
        <div className="forgot-password">
        <Link to="/forgot">Forgot Password?</Link>
        </div>
      </div>
    );
  }
}

// maps store state to local props
const mapStateToProps = (state) => {
  return {
    singleUser : state.singleUser
  };
};

//maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginCreds) => {
      dispatch(loginUser(loginCreds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);