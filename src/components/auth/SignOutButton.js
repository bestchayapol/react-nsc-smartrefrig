import React, {Component} from 'react'
import auth from '../Firebase/firebase'

class SignOutButton extends Component {
    state = {
        currentUser: '',
        uid: '',
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
        return (
            <a onClick = {this.logout}>ออกจากระบบ</a>
        )
    }
}

export default SignOutButton