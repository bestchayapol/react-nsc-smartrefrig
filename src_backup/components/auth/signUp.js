import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/AuthActions'
import {connect} from 'react-redux'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
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
                            <div className="input-field col s12">
                                <i class="material-icons prefix">account_box</i>
                                <label htmlFor="firstName">ชื่อ</label>
                                <input type="text" id="firstName" onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i class="material-icons prefix">account_circle</i>
                                <label htmlFor="lastName">นามสกุล</label>
                                <input type="text" id="lastName" onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s6 m6 l6 scBtn">
                                <button className="btn waves-effect waves-light">ลงทะเบียน
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
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);