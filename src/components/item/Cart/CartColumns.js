import React from 'react'

export default function CartColumns() {
    return (
        <div className="container center-align d-none show-on-large">
            <div className="row">
                <div className="col s12 mx-auto l2">
                    <p className="text-uppercase">สินค้า</p>
                </div>
                <div className="col s12 mx-auto l2">
                    <p className="text-uppercase">ชื่อสินค้า</p>
                </div>
                <div className="col s12 mx-auto l2">
                    <p className="text-uppercase">ราคา</p>
                </div>
                <div className="col s12 mx-auto l2">
                    <p className="text-uppercase">ลบออก</p>
                </div>

            </div>
        </div>
    )
}
