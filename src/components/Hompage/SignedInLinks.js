import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../auth/SignOutButton";
import person from "../../img/person.jpg";
import auth, { database } from "../Firebase/firebase";

class SignedInLinks extends Component {
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
    console.log(this.props);
    console.log(this.state);
    const { users } = this.state;
    return (
      <div>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to={ROUTES.DASHBOARD}>รายการสินค้า</NavLink>
          </li>
          <li>
            <SignOutButton />
          </li>
          <li>
            <a
              href="#"
              className="btn btn-floating blue lighten-1 dropdown-trigger"
              data-target="dropdown"
              data-beloworigin="true"
            >
              CM
            </a>
          </li>
        </ul>
        <ul id="dropdown" className="dropdown-content">
          <li>
            <a href="#!">Hi {users.name}</a>
          </li>
          <li>
            <img
              className="profileIcon circle"
              src={users.userUrl}
              width="70"
              height="70"
            />
          </li>
          <li className="divider" tabindex="-1" />
          <li>
            <Link to={ROUTES.ACCOUNT}>
              <i className="material-icons">account_circle</i>บัญชีของฉัน
            </Link>
          </li>
          <li>
            <Link to={ROUTES.SAVEITEM}>
              <i className="material-icons">save</i>สินค้าที่บันทึกไว้
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SignedInLinks;
