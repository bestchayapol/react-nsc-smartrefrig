import React, {Component} from 'react'
import BlueBg from '../../../img/blueGrandientBg.png'
import ViewBg from '../../../img/viewBg.png'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {AddAddress} from '../../../store/actions/AddressActions'
import {Link} from 'react-router-dom';

class createAccount extends Component {
    state = {
        name: '',
        phone: '',
        address: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.AddAddress(this.state)
        this.props.history.push('/')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render() {
        console.log(this.state);
        
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

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
                                        <div className="my-account-section__header-title">เพิ่มที่อยู่ใหม่</div>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="input-field">
                                                <input onChange={this.handleChange} type="text" required placeholder="ชื่อ" id="name" maxLength="64"/>
                                            </div>
                                            <div className="input-field">
                                                <input onChange={this.handleChange} type="text" placeholder="เบอร์โทรศัพท์" id="phone" required maxLength="64"/>
                                            </div>
                                            <div className="input-field">
                                                <textarea className="materialize-textarea" onChange={this.handleChange} id="address" cols="30" rows="30" required placeholder="ที่อยู่"></textarea>      
                                            </div>
                                            <div className="modal-footer">
                                                <Link to='/address' className="waves-effect waves-red btn-flat">ยกเลิก</Link>
                                                <button className="waves-effect btn waves-green">ยืนยัน</button>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddAddress: (address) => dispatch(AddAddress(address)) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(createAccount)