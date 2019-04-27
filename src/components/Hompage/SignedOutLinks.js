import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import officeBg from '../../img/officeBg.jpeg'
import auth, { database } from "../Firebase/firebase";

class SignedOutLinks extends Component {
  state = {
    users: ""
  };
  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);
        return database.ref("user/" + user.uid).on("value", snapshot => {
          var user = snapshot.val();
          this.setState({ users: user });
        });
      }
    });

    // var userId = auth.currentUser.uid
  };
  componentWillMount = () => {
    database.ref("user").off();
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to={ROUTES.ABOUTUS}>เกี่ยวกับเรา</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SIGN_UP}>ลงทะเบียน</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SIGN_IN}>เข้าสู่ระบบ</NavLink>
          </li>
        </ul>
        <ul className="sidenav" id="mobile-demo">
          <li><div className="user-view">
            <div className="background">
              <img src={officeBg} />
            </div>
            <a href="#user"><img className="circle" src={users.userUrl} /></a>
            <a href="#name"><span className="white-text name">{users.name}</span></a>
            <a href="#email"><span className="white-text email">{users.email}</span></a>
          </div></li>
          <li>
            <NavLink to={ROUTES.ABOUTUS}>เกี่ยวกับเรา</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.DASHBOARD}>รายการอาหาร</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SIGN_UP}>ลงทะเบียน</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SIGN_IN}>เข้าสู่ระบบ</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default SignedOutLinks;
