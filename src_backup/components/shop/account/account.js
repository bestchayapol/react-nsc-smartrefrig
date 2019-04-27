import React, {Component} from 'react'
import PurpleBg from '../../../img/purplebg.jpg'
import BlueBg from '../../../img/blueGrandientBg.png'
import ViewBg from '../../../img/viewBg.png'
import person from '../../../img/person.jpg'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import M from 'materialize-css'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom';
import firebase from '../../../config/fbConfig'

class account extends Component {
    state = {
        accounts: [],
        account_id: '',
        firstName: '',
        lastName: '',
        phone: ''
    }   
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const accountRef = firebase.database().ref('account')
        const account = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone
        }
        accountRef.push(account)
        this.setState({
            account_id: '',
            firstName: '',
            lastName: '',
            phone: '',
        })
    }
    componentDidMount = () => {
        M.AutoInit()
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal')
            var instances = M.Modal.init(elems)
        })

        const accountRef = firebase.database().ref('account')
        accountRef.on('value', (snapshot) => {
            let accounts = snapshot.val()
            let newState = []
            for(let account in accounts) {
                newState.push({
                    account_id: account,
                    firstName: accounts[account].firstName,
                    lastName: accounts[account].lastName,
                    phone: accounts[account].phone,
                })
            }
            this.setState({
                accounts: newState
            })
        })
    }
    render() {                
        const {addresses, auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        
        var PurpleBackground = {
            backgroundImage: `url(${PurpleBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
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
                                            <Link to='/address' className="btn-floating red btn-large waves-effect waves-light modal-trigger barBtn"><i className="material-icons">airport_shuttle</i></Link>
                                            <Link to='/payment' className="btn-floating yellow btn-large waves-effect waves-light modal-trigger barBtn"><i className="material-icons">attach_money</i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="my-account-section__header">
                                        <div className="my-account-section__header-title">ข้อมูลของฉัน</div>
                                    </div>
                                    <div className="my-account-profile">
                                        <div className="my-account-profile__left">
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="input-with-label">
                                                    <div className="input-with-label__wrapper">
                                                        <div className="input-with-label__label">
                                                            <label htmlFor="name">ชื่อ: </label>
                                                        </div>
                                                        <div className="input-with-label__content">
                                                            <input type="text" id='firstName' onChange={this.handleChange} value = {this.state.firstName} required placeholder />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-with-label">
                                                    <div className="input-with-label__wrapper">
                                                        <div className="input-with-label__label">
                                                            <label htmlFor="name">นามสกุล: </label>
                                                        </div>
                                                        <div className="input-with-label__content">
                                                            <input id='lastName' onChange={this.handleChange} value = {this.state.lastName} required type="text" placeholder />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-with-label">
                                                    <div className="input-with-label__wrapper">
                                                        <div className="input-with-label__label">
                                                            <label htmlFor="name">เบอร์โทรศัพท์: </label>
                                                        </div>
                                                        <div className="input-with-label__content">
                                                            <input id='phone' onChange={this.handleChange} value = {this.state.phone} required type="text" placeholder />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col s12 m12 l12" align='center'>
                                                            <button align='center' className="btn green waves-effect waves-light">บันทึก</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="my-account-profile__right">
                                            <div className="avatar-uploader">
                                                <div className="avatar-uploader__avatar">
                                                    <div className="avatar-uploader__avatar-image">
                                                        <img className="circle" src={person} width="90" height="90" alt="profile" />
                                                    </div>
                                                </div>
                                                <input className="avatar-uploader__file-input" type="file" accept=".jpg,.jpeg,.png"/>
                                                <button type="button" className="btn purple waves-effect waves-light">เปลี่ยนรูปโปรไฟล์</button>
                                            </div>
                                            {/* <img className="circle" src={person} width="90" height="90" alt="profile"/>
                                            <button className="btn purple waves-effect waves-light profileBtn" type="submit">เปลี่ยนรูปโปรไฟล์</button>  */}
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
)(account);