import React, { Component } from 'react'
import {withFirebase} from '../Firebase'
import {compose} from 'recompose'
import {Redirect} from 'react-router-dom'
import {SignUpLink} from './SignUp'
import * as ROUTES from '../../constants/routes'
import auth from '../Firebase/firebase'
import Navbar from '../Hompage/Navbar'
// const SignInPage = () => (
//     <div>
//         <SignInForm />
//     </div>
// )

class SignInPage extends Component {
    state = {
        email: '',
        password: '',
        currentUser: '',
        uid: '',
        message: '',
        error: null
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
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        const {email, password, uid} = this.state

        auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            this.setState({
                currentUser: response.user,
                uid: response.user.uid
            })
        })
        .catch(error => {
            this.setState({
                message: error.message
            })
        })
        // this.props.firebase
        //     .doSignInWithEmailAndPassword(email, password)
        //     .then(() => {
        //         this.setState({...INITIAL_STATE})
        //         this.props.history.push(ROUTES.HOME)
        //     })
        //     .catch(error => {
        //         this.setState({error});
        //     })

        e.preventDefault()
    }


    render() {  
        console.log(this.state)
        console.log(this.props)
        const {email, password, error, currentUser, uid} = this.state
        const isInvalid = (password === '') || (email === '')

        if(currentUser && (uid !== '')) {
            return (
                <div>
                    <Redirect to='/' />
                </div>
            )
        }
        return(
            <div id= "login-page" className="row">
                <div className="col s12 m12 l12 z-depth-6 card-panel">
                    <form className = "login-form" onSubmit={this.handleSubmit}>
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mail_outline</i>
                                <label htmlFor="email">อีเมล</label>
                                <input type="email" id="email" value={email} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <label htmlFor="password">รหัสผ่าน</label>
                                <input type="password" id="password" value={password} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s6 m6 l6 scBtn">
                                <button type='submit' disabled={isInvalid} className="btn waves-effect waves-light">เข้าสู่ระบบ
                                    <i className="material-icons right">check</i>
                                </button>
                            </div>
                            <div className="input-field col s6 m6 l6 scBtn">
                                <button type="reset" className = "btn waves-effect waves-light">ยกเลิก
                                    <i className="material-icons right">close</i>
                                </button>
                            </div>
                            <SignUpLink />
                        </div>
                        {error && <p>{error.message}</p>}
                    </form>
                </div>
            </div>
        )
    }
}
// const SignInForm = compose(
//     withRouter,
//     withFirebase,
// )(SignInFormBase)

export default SignInPage;