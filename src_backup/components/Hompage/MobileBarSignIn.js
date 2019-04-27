import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/AuthActions';
import officeBg from '../../img/officeBg.jpeg'
import person from '../../img/person.jpg'

const MobileBarSignIn = (props) => {
    console.log(props);
    
    return (
            <ul className="sidenav" id="slide-out">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={officeBg} />
                        </div>
                        <a href="#user"><img className="circle" src={person} /></a>
                        <a href="#name"><span className="white-text name">{props.profile.firstName} {props.profile.lastName}</span></a>
                        <a href="#email"><span className="white-text email">{props.profile.email}</span></a>
                    </div>
                </li>
                <li><NavLink to = '/foodList'>รายการอาหาร</NavLink></li>    
                <li><NavLink to = '/aboutus'>เกี่ยวกับเรา</NavLink></li>
                <li><a onClick = {props.signOut}>ออกจากระบบ</a></li>
            </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(MobileBarSignIn);   