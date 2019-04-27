import React from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

const addressDetail = (props) => {
    const {address, auth} = props
    if(address) {
        return (
            <div className="address-display__left">
            <div className="address-display__field-container address-display__field-container--name">
                <div className="address-display__field-label">ชื่อ</div>
                <div className="address-display__field-content">
                    <span className="address-display__name-text">
                        {address.name}
                    </span>
                </div>
            </div>
            <div className="address-display__field-container">
                <div className="address-display__field-label">โทรศัพท์</div>
                <div className="address-display__field-content">{address.phone}</div>  
            </div>
            <div className="address-display__field-container">
                <div className="address-display__field-label">ที่อยู่</div>
                <div className="address-display__field-content">
                    <span>
                        {address.address}
                    </span>
                </div>  
            </div>

            {/* Modal Trigger */}
            <a className="waves-effect waves-light btn orange btnsec modal-trigger" href="#EditAddress">แก้ไขที่อยู่</a>
            <button className="waves-effect waves-light btn red btnsec" onClick={this.handleClick}>ลบ</button>

            {/* Modal Structure */}
            <div id="EditAddress" className="modal">
                <div className="modal-content">
                    <h4>Something that new</h4>
                    <p>This one is available since 1918</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-close waves-effect waves-red btn-flat">ยกเลิก</button>
                    <button className="waves-effect waves-yellow btn-flat">แก้ไข</button>
                </div>
            </div>
        </div>
        )
    }
}

export default addressDetail