import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import addressSummary from './addressSummary'

class addressList extends Component {
    render() {
        return (
            <div className="accountList section">
                {this.props.addresses && this.props.addresses.map(address => {
                    return(
                            <div>
                                <Link to={'/address/' + address.id} key={address.id}>
                                    <addressSummary address = {address} />
                                </Link>      
                            </div>
                    )
                })}      
            </div>
        )
    }
}

export default addressList