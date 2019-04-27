import React, { Component } from 'react'
import PurpleBg from '../../../img/purplebg.jpg'
import BlueBg from '../../../img/blueGrandientBg.png'
import ViewBg from '../../../img/viewBg.png'
import M from 'materialize-css'
import auth, { database } from '../../Firebase/firebase'
import { Link, Redirect, withRouter } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes'

class addAccount extends Component {
    state = {
        users: '',
        username: '',
        personId: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        const { username, personId, phone } = this.state
        e.preventDefault()
        return database.ref('user/' + auth.currentUser.uid).update({
            name: username,
            personId: personId,
            telephone: phone
        })
            .then(() => {
                this.props.history.push(ROUTES.ACCOUNT)
            })
    }
    componentDidMount = () => {
        M.AutoInit()
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal')
            var instances = M.Modal.init(elems)
            var trigger = document.querySelectorAll('.modal-trigger')
        })

        auth.onAuthStateChanged(user => {
            if (user) {
                console.log(user.uid)
                return database.ref('user/' + user.uid).on('value', snapshot => {
                    var user = snapshot.val()
                    this.setState({
                        users: user
                    })
                })
            }
        })
    }
    componentWillUnmount = () => {
        database.ref('user').off()
    }
    render() {
        console.log(this.state)
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
                                            <Link to={ROUTES.ACCOUNT} className="btn-floating red btn-large waves-effect waves-light modal-trigger barBtn"><i className="material-icons">account_box</i></Link>
                                            <Link to='/payment' className="btn-floating yellow btn-large waves-effect waves-light modal-trigger barBtn"><i className="material-icons">attach_money</i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="my-account-section__header">
                                        <div className="my-account-section__header-title">ข้อมูลของฉัน</div>
                                    </div>
                                    <div className="addAccount">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="input-with-label">
                                                <div className="input-with-label__wrapper">
                                                    <div className="input-with-label__label">
                                                        <label htmlFor="name">ชื่อ: </label>
                                                    </div>
                                                    <div className="input-with-label__content">
                                                        <div className="input-with-validator-wrapper">
                                                            <div className="input-with-validator">
                                                                <input type="text" id="username" onChange={this.handleChange} required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-with-label">
                                                <div className="input-with-label__wrapper">
                                                    <div className="input-with-label__label">
                                                        <label htmlFor="name">เลขประจำตัว: </label>
                                                    </div>
                                                    <div className="input-with-label__content">
                                                        <div className="input-with-validator-wrapper">
                                                            <div className="input-with-validator">
                                                                <input type="text" id="personId" onChange={this.handleChange} required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-with-label">
                                                <div className="input-with-label__wrapper">
                                                    <div className="input-with-label__label">
                                                        <label htmlFor="name">เบอร์โทรศัพท์: </label>
                                                    </div>
                                                    <div className="input-with-label__content">
                                                        <div className="input-with-validator-wrapper">
                                                            <div className="input-with-validator">
                                                                <input type="text" id="phone" onChange={this.handleChange} required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col s12 m12 l12" align="center">
                                                        <button type="submit" className="green btn waves-effect waves-light">ยืนยันการแก้ไข</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default withRouter(addAccount)