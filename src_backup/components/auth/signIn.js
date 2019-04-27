import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import {signIn} from '../../store/actions/AuthActions'
import {connect} from 'react-redux'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }
    render() {
        const {authError, auth} = this.props
        if(auth.uid) return <Redirect to='/' />
        return(
            <div id= "login-page" className="row">
                <div className="col s12 m12 l12 z-depth-6 card-panel">
                    <form className = "login-form" onSubmit={this.handleSubmit}>
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i class="material-icons prefix">mail_outline</i>
                                <label htmlFor="email">อีเมล</label>
                                <input type="email" id="email" onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i class="material-icons prefix">lock_outline</i>
                                <label htmlFor="password">รหัสผ่าน</label>
                                <input type="password" id="password" onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12 login-text">
                                <label htmlFor="remember-me">
                                    <input type="checkbox" id="remember-me" />
                                    <span>จดจำฉัน</span>
                                </label>
                            </div>
                        </div>
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s6 m6 l6 scBtn">
                                <button className="btn waves-effect waves-light">เข้าสู่ระบบ
                                    <i className="material-icons right">check</i>
                                </button>
                            </div>
                            <div className="input-field col s6 m6 l6 scBtn">
                                <button type="reset" className = "btn waves-effect waves-light">ยกเลิก
                                    <i className="material-icons right">close</i>
                                </button>
                            </div>
                            <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="input-field col s6 m6 l6 ">
                                        <p className="margin medium-small"><Link to="/signup">ลงทะเบียน</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);