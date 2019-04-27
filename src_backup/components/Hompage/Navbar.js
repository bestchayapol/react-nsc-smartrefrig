import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import MobileBarSignIn from './MobileBarSignIn';
import MobileBarSignOut from './MobileBarSignOut';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/AuthActions';                        
import account from '../shop/account/account';

const Navbar = (props) => {
    const {auth, profile} = props
    const links = auth.uid ? <SignedInLinks profile = {profile} /> : <SignedOutLinks />   
    const MobileBar = auth.uid ? <MobileBarSignIn profile = {profile} /> : <MobileBarSignOut />
    const Account = auth.uid ? <account profile={profile} /> : <account />
    return(
        <div>
            <nav>
                <div className="nav-wrapper blue darken-3">
                    <div className="container">
                        <Link to = "/" className = "brand-logo">SmartRefrig</Link>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            {links}
                    </div>
                </div>
            </nav>
            {MobileBar}
            {Account}
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);