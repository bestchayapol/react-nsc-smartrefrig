import React, {Component} from 'react'
import BlueBg from '../../../img/blueGrandientBg.png'
import ViewBg from '../../../img/viewBg.png'
import {Link} from 'react-router-dom';
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase'
import addressList from './addressList'

class address extends Component {
    render() {
        const {addresses, auth} = this.props
        if(!auth.uid) return <Redirect to='/signin' />
        
        console.log(this.state);

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
                                            <Link to='/payment' className="btn-floating yellow btn-large waves-effect waves-light modal-trigger barBtn"><i className="material-icons">attach_money</i></Link>
                                        </div>
                                    </div>
                            </div>
                                <div className="box">
                                <div className="my-account-section__header">
                                        <div className="my-account-section__header-title">ที่อยู่การจัดส่ง</div>
                                    </div>
                                    <div className="my-account-profile">
                                        <div className="my-account-profile__left">
                                            <div className="address-card">
                                                <div></div>
                                                {/* List Account */}
                                                {/* {this.props.addresses[0].name} */}
                                                <addressList addresses = {addresses} />
                                            </div>
                                        </div>
                                        <div className="my-account-profile__right">
                                            {/* Modal Trigger */}
                                            {/* <a className="btn-floating purple btn-large waves-effect waves-light modal-trigger editBtn" href="#AddNewAddress"><i className="material-icons">add</i></a> */}
                                            <Link to='/create' className="btn-floating purple btn-large waves-effect waves-light modal-trigger editBtn"><i className="material-icons">add</i></Link>
                                            {/* Modal Structure */}
                                            {/* <div id="AddNewAddress" className="modal">
                                                <div className="modal-content">
                                                    {/* Header */}
                                                    {/* <div className="refrig-popup-form__header">
                                                        <div className="refrig-popup-form__title">
                                                            เพิ่มที่อยู่ใหม่
                                                        </div>
                                                    </div>
                                                    <br /> */}

                                                    {/* Address Form */}
                                                    {/* <form onSubmit={this.handleSubmit}>
                                                    <div className="refrig-popup-form__main">
                                                        <div className="refrig-popup-form__main-container">
                                                            <div className="address-modal__form_input">
                                                                <div className="input-with-status">
                                                                    <div className="input-with-status__wrapper">
                                                                        <input className="input-with-status__input" onChange={this.handleChange} type="text" required placeholder="ชื่อ" id="name" maxLength="64"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="address-modal__form_input">
                                                                <div className="input-with-status">
                                                                    <div className="input-with-status__wrapper">
                                                                        <input className="input-with-status__input" onChange={this.handleChange} type="text" placeholder="เบอร์โทรศัพท์" id="phone" required maxLength="64"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="address-modal__form_input">
                                                                <div className="input-with-status">
                                                                    <textarea className="materialize-textarea" onChange={this.handleChange} id="address" cols="30" rows="30" required placeholder="ที่อยู่"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button className="modal-close waves-effect waves-red btn-flat">ยกเลิก</button>
                                                        <button className="waves-effect btn waves-green">ยืนยัน</button>
                                                    </div>
                                                    </form>
                                                </div> */}
                                            {/* </div> */}
                                        </div>
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
const mapStateToProps = (state) => {
    console.log(state)
    return {
        addresses: state.firestore.ordered.address,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'address'}
    ])
)(address)