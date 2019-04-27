import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/AuthActions';
import person from '../../img/person.jpg'
import $ from 'jquery'

class SignedInLinks extends Component {
    componentDidMount = () => {
        
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <ul className = 'right hide-on-med-and-down'>
                    <li><NavLink to = '/foodList'>รายการอาหาร</NavLink></li>
                    <li><a onClick = {this.props.signOut}>ออกจากระบบ</a></li>
                    <li><a href="#" className = 'btn btn-floating blue lighten-1 dropdown-trigger' 
                    data-target="dropdown" data-beloworigin="true">{this.props.profile.initials}</a></li>
                </ul>
    
                <ul id='dropdown' className='dropdown-content'>
                    <li><a href="#!">Hi {this.props.profile.firstName} {this.props.profile.lastName}</a></li>
                    <li><img className = "profileIcon circle" src={person} width="70" height="70"/></li>
                    <li className="divider" tabindex="-1"></li>
                    <li><Link to='/account'><i className="material-icons">account_circle</i>บัญชีของฉัน</Link></li>
                    <li><Link to='/cart'><i className="material-icons">add_shopping_cart</i>ตะกร้าของฉัน</Link></li>
                    <li><Link to='/star'><i className="material-icons">star</i>ติดดาว</Link></li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);   