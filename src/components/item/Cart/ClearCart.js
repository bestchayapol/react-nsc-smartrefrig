import React from 'react'
import { Link } from 'react-router-dom'

export default function ClearCart({ value }) {
    const { clearSave } = value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col s8 l10 mt-2 ml-sm-5 ml-md-auto text-capitalize center-align">
                        <Link to='/dashboard'>
                            <button onClick={() => clearSave()} className="btn btn-large btn-waves red mb-3 px-5 clearBtn" type="button">ลบสินค้าทั้งหมด</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
