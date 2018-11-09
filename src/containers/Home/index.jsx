import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nickname: '',
      email: '',
      password: '',
      windowWidth: window.innerWidth
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.enterName = this.enterName.bind(this);
    this.enterNickName = this.enterNickName.bind(this);
    this.enterEmail = this.enterEmail.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
    this.pwRequest = this.pwRequest.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ windowWidth: window.innerWidth });
    });
  }
  login(e) {
    e.preventDefault();
    // console.log(this.state.email, this.state.password);
    this.props.login(this.state.email, this.state.password);
  }
  signup(e) {
    e.preventDefault();
    // console.log(this.state.name, this.state.email, this.state.password);
    this.props.signup(this.state.name, this.state.nickname, this.state.email, this.state.password);
  }
  enterName(e) {
    this.setState({ name: e.target.value });
  }
  enterNickName(e) {
    this.setState({ nickname: e.target.value });
  }
  enterEmail(e) {
    // console.log(e.target);
    this.setState({ email: e.target.value });
  }
  enterPassword(e) {
    this.setState({ password: e.target.value });
  }
  pwRequest(e) {
    e.preventDefault();
    this.props.pwRequest(this.state.email);
  }
  responseFacebook(response) {
    this.props.fbLogin(response.accessToken);
  }
  /* eslint-disable no-nested-ternary */
  render() {
    return (
    <div> hi </div>
    )
  }
}




// const mapStateToProps = (state) => {
//   return {
//     messages : state.messagesList, // makes it this.props.messages
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadMessages: () => {
//       dispatch(loadMessages());
//     }
//   }
// }


export default (Home);