import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import account from "../shop/account/account";
import person from "../../img/person.jpg";
import SignOutButton from "../auth/SignOutButton";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import auth from "../Firebase/firebase";
import SignedInLinks from "../Hompage/SignedInLinks";
import SignedOutLinks from "../Hompage/SignedOutLinks";

const Navbar = () => (
  <div>
    {/* <AuthUserContext.Consumer>
            {authUser => 
                authUser ? (
                    <NavbarAuth authUser={authUser} /> 
                ) : (
                    <NavbarNonAuth />
                )
            }
        </AuthUserContext.Consumer> */}
    {/* {uid ? (<NavbarAuth />) : (<NavbarNonAuth />)} */}
    <div className="navbar">
      <nav className="nav-wrapper blue darken-3">
        <div className="container">
          <Link to={ROUTES.HOME} className="brand-logo">
            SmartRefrig
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    </div>
  </div>
);

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signOut: () => dispatch(signOut())
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         auth: state.firebase.auth,
//         profile: state.firebase.profile
//     }
// }
export default Navbar;
