import React from 'react'
import { Link } from 'react-router-dom'

export default function CartItem({ item, value }) {
    const { id, title, img, price } = item
    const { removeItem } = value
    return (
        <div className="row my-3 text-capitalize center-align">
            <div className="col s10 mx-auto l2">
                <img src={img} className="responsive-img" style={{ width: "5rem", height: "5rem" }} alt="product" />
            </div>
            <div className="col s10 mx-auto l2">
                <span className="hide-on-large-only">
                    สินค้า :
                </span>
                {title}
            </div>
            <div className="col s10 mx-auto l2">
                <span className="hide-on-large-only">
                    ราคา :
                </span>
                ฿{price}
            </div>
            <div className="col s10 mx-auto l2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col s10 mx-auto l2">
                <Link to='/chat' className='btn btn-waves btn-light orange'>ยื่นข้อเสนอแนะ</Link>
            </div>
        </div>
    )
}
