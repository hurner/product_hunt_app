import React from 'react';
import { Link } from 'react-router-dom';

class SessionNav extends React.Component {
  constructor(props) {
    super(props);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderSignup = this.renderSignup.bind(this);
  }

  renderLogin() {
    console.log('clicked login');
  }

  renderSignup() {
    console.log('clicked signup');
  }

  render() {
    return (<nav className="login-signup"> 
        <Link to='/login'>LOG IN</Link>

        <Link to='/signup'>SIGN UP</Link>

        <button className="login-button mediumSize" onClick={this.renderLogin} >LOG IN</button>
        <button className="signup-button mediumSize" onClick={this.renderSignup} >SIGN UP</button>
    </nav>);
  }
}

export default SessionNav;