import React, {Component} from 'react'
import BlueBg from '../../../img/blueGrandientBg.png'
import ViewBg from '../../../img/viewBg.png'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class payment extends Component {
    render() {
        var BlueBackground = {
            backgroundImage: `url(${BlueBg})`
        }
        var ViewBackground = {
            backgroundImage: `url(${ViewBg})`
        }
        return (
            <div>
                <div className="section AccountHeader" style={BlueBackground}>
                    <h3 className="myAccount" align="center">บัญชีของฉัน</h3>
                </div>
                <div className="section AccountBody" style={ViewBackground}>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="box">
                                        <div className="my-account-section__header">
                                            <div className="my-account-section__header-title">
                                                <Link to='/account' className="btn-floating red btn-large waves-effect waves-light modal-trigger barBtn"><i className="material-icons">account_box</i></Link>
                                                <Link to='/address' className="btn-floating purple btn-large waves-effect waves-light modal-trigger barBtn"><i className="material-icons">airport_shuttle</i></Link>
                                            </div>
                                        </div>
                                </div>
                                <div className="box">
                                    <div className="my-account-section__header">
                                        <div className="my-account-section__header-title">การชำระเงิน</div>
                                    </div>
                                    <div className="my-account-profile">
                                        <div className="my-account-profile__left">
                                            <div className="input-with-label Addcredit">
                                                <div className="input-with-label__wrapper">
                                                    <div className="input-with-label__label__payment">
                                                        <i className="material-icons">account_balance_wallet</i>
                                                    </div>
                                                    <div className="input-with-label__content">
                                                        <div className="input-with-validator-wrapper">
                                                            <div className="input-with-validator">
                                                                <input type="text"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-account-profile__right">
                                            <button className='btn-large waves-effect waves-light orange'><i className='material-icons left'>loop</i>Update</button>
                                        </div>
                                    </div>
                                     <div className="my-account-section__header">
                                        <Link className='btn-large waves-effect waves-light orange'><i className='material-icons left'>loop</i>Update</Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default payment