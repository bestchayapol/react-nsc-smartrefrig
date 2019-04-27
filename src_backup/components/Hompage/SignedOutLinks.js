import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className = 'right hide-on-med-and-down'>
            <li><NavLink to = '/aboutus'>เกี่ยวกับเรา</NavLink></li>
            <li><NavLink to = '/signup'>ลงทะเบียน</NavLink></li>
            <li><NavLink to = '/signin'>เข้าสู่ระบบ</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;