import React, {Component} from 'react'
import BlueBg from '../../../img/blueGrandientBg.png'
import ViewBg from '../../../img/viewBg.png'
// import {withAuthorization} from '../../Session'

class AddPayment extends Component {
    render() {
        var BlueBackground = {
            backgroundImage: `url(${BlueBg})`
        }
        var ViewBackground = {
            backgroundImage: `url(${ViewBg})`
        }
        return(
            <div>
                <div className="section AccountHeader" style={BlueBackground}>
                    <h3 className="myAccount" align="center">บัญชีของฉัน</h3>
                </div>
                <div className="addpayment section" style={ViewBackground}>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="box">
                                    <div className="my-account-section__header">
                                        <div className="my-account-section__header-title">เพิ่มบัตรเครดิต</div>
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

// const condition = authUser => !!authUser;

export default AddPayment