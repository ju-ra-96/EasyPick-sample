import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import {Button} from '../Button/Button';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import {PrivateMenuItems} from './PrivateMenuItems';
import RcIf from 'rc-if';

class Navbar extends Component {
  state = {clicked: false};

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  };
  logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('email');
    localStorage.removeItem('authToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    window.location.reload();
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          EasyPick
          <img src="Phone_Ilias_Icon_White.svg" alt="logo" className="logo" />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <RcIf if={localStorage.getItem('authToken') != null}>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {PrivateMenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.url}>
                    <a href={item.url} className={item.cName}>
                      {item.title}
                    </a>
                  </NavLink>
                </li>
              );
            })}
            <Button
              class="logout-button"
              onClick={(e) => {
                e.preventDefault();
                this.logoutHandler(e);
              }}
            >
              Logout
            </Button>
          </ul>
        </RcIf>
        <RcIf if={localStorage.getItem('authToken') == null}>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.url}>
                    <a href={item.url} className={item.cName}>
                      {item.title}
                    </a>
                  </NavLink>
                </li>
              );
            })}
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/register';
              }}
            >
              Sign Up
            </Button>
          </ul>
        </RcIf>
      </nav>
    );
  }
}

export default Navbar;
