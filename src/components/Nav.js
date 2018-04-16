import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
//import Auth from './Auth.js';
import '../App.css';

class Nav extends Component {

  /*goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {
    const { isAuthenticated } = this.props.Auth;

    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">FCM CMS</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Content Library</Link>
          </li>
          <li>
            {
              <Link to="/upload">Upload Content</Link>
            }
          </li>
          <li>
            {
              <Link to="/screen">Screen Display</Link>
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             <button className="btn btn-info log" onClick={() => this.login()}>Log In</button>
           }
          </li>
        </ul>
      </nav>
    );
  }*/

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">FCM CMS</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Content Library</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/upload">Upload Content</Link> :  ''
            }
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/screen">Screen Display</Link> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
