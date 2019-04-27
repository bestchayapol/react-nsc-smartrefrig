import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase'
import {compose} from 'recompose'
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles'
import {Link, Redirect} from 'react-router-dom'
import auth, {database} from '../Firebase/firebase'
import Navbar from '../Hompage/Navbar'
// const SignUpPage = () => (
//     <div>
//         <SignUpForm />
//     </div>
// )
// const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';
// const ERROR_MSG_ACCOUNT_EXISTS = `บัญชีนี้ถูกใช้ไปแล้ว กรุณาลองใหม่`

class SignUpPage extends Component {
    state = {
        email: '',
        password: '',
        passwordVerify: '',
        username: '',
        currentUser: '',
        uid:'',
        message: '',
    }
    componentDidMount = () => {
        auth.onAuthStateChanged(user => {
            if(user) {
                this.setState({
                    currentUser: user,
                    uid: user.uid
                })
            }
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {email, password, username, isAdmin} = this.state
        auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
            this.setState({
                currentUser: response.user,
                uid: response.user.uid
            })
            return database.ref('user/' + response.user.uid).set({
                email: email,
                height: '-',
                name: username,
                personId: '',
                telephone: '',
                userUid: response.user.uid,  
                userUrl: '',
                weight: '-'
            })
        })
        .catch(error => {
            this.setState({
                message: error.message
            })
        })
        // if(uid) {
        //     return <Navbar uid = {uid} />
        // }

        const roles = {}

        if(isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN
        }

        // this.props.firebase
        // .doCreateUserWithEmailAndPassword(email, password)
        // .then((authUser) => {
        //     // Create user in firebase realtime database
        //     return this.props.firebase
        //         .user(authUser.user.uid)
        //         .set({
        //             username,
        //             email,
        //             roles,
        //         })
        // })
        //     .then(() => {
        //         this.setState({...INITIAL_STATE})
        //         this.props.history.push(ROUTES.HOME)
        //     })
        //     .catch(error => {
        //         if(error.code === ERROR_CODE_ACCOUNT_EXISTS) {
        //             error.message = ERROR_MSG_ACCOUNT_EXISTS
        //         }   
        //         this.setState({error})
        //     })
    }
    onChangeCheckBox = (e) => {
        this.setState({ [e.target.name]: e.taget.checked })
    }
    logout = (e) => {
        e.preventDefault()
        auth.signOut().then(response => {
            this.setState({
                currentUser: '',
                uid: ''
            })
        })
    }
    render() {
        console.log(this.props)
        console.log(this.state)
        const {email, password, passwordVerify,username, message, currentUser, uid} = this.state
        const isInvalid = (password !== passwordVerify) || (password === '') || (email === '') || 
                            (username === ''); 
        
                            if(currentUser && (uid !== '')) {
                                return (
                                    <div>
                                        <Redirect to='/' />
                                    </div>
                                )
                            }
            return (
            <div id= "login-page" className="row">
                <div className="col s12 m12 l12 z-depth-6 card-panel">
                    <form className = "login-form" onSubmit={this.handleSubmit}>
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mail_outline</i>
                                <label htmlFor="email">อีเมล</label>
                                <input type="email" name="email" id="email" value={email} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <label htmlFor="password">รหัสผ่าน</label>
                                <input type="password" name="password" id="password" value={password} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <label htmlFor="password">ยืนยันรหัสผ่าน</label>
                                <input type="password" name="passwordVerify" id="passwordVerify" value={passwordVerify} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_box</i>
                                <label htmlFor="firstName">ชื่อจริง</label>
                                <input type="text" name="username" id="username" value={username} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s6 m6 l6 scBtn">
                                <button type='submit' disabled={isInvalid} className="btn waves-effect waves-light">ลงทะเบียน
                                    <i className="material-icons right">check</i>
                                </button>
                            </div>
                            <div className="input-field col s6 m6 l6 scBtn">
                                <button type="reset" className = "btn waves-effect waves-light">ยกเลิก
                                    <i className="material-icons right">close</i>
                                </button>
                            </div>
                        </div>
                        {message ? <p>{message}</p> : null}
                    </form>
                </div>
            </div>
        )
    }
}

const SignUpLink = () => (
    <div className="container">
        <div className="row">
            <div className="input-field col s6 m6 l6 ">
                <p className="margin medium-small">คุณยังไม่มีบัญชี?</p><Link to={ROUTES.SIGN_UP}>ลงทะเบียน</Link>
            </div>
        </div>
    </div>
)

// const SignUpForm = compose(
//     withRouter,
//     withFirebase,
// )(SignUpFormBase)

export default SignUpPage
export {SignUpLink}