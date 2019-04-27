import React from 'react';
import {NavLink} from 'react-router-dom';

const MobileBarSignOut = (props) => {
    return (
            <ul className="sidenav" id="slide-out">
                <li><NavLink to = '/aboutus'>เกี่ยวกับเรา</NavLink></li>
                <li><NavLink to = '/signup'>ลงทะเบียน</NavLink></li>
                <li><NavLink to = '/signin'>เข้าสู่ระบบ</NavLink></li>
            </ul>
    )
}

export default MobileBarSignOut;   