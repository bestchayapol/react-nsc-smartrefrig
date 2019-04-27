import React, { Component } from "react";
import { ItemConsumer } from './context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
  render() {
    return (
      <ItemConsumer>
        {value => {
          {/* const { id, title, img, price, saler, info, inCart } = value.detailItem */ }
          const { id, title, img, price, saler, ItemWish, address, info, inCart } = value.detailItem
          return (
            <div className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col s10 l10 m10 mx-auto center-align text-slanted blue-text my-5">
                  <h1 className="text-title-detail">{title}</h1>
                </div>
              </div>
              {/* End Title */}
              {/* Product Info */}
              <div className="row">
                <div className="col s10 m6 mx-auto my-3">
                  <img src={img} alt="Item" className="responsive-img" />
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    สินค้าที่ต้องการแลก:
                  </p>
                  <p className="grey-text">- {ItemWish}</p>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    การขนส่ง:
                  </p>
                  <p className="grey-text">- {address}</p>
                </div>
                {/* Product text */}
                <div className="col s10 m6 mx-auto text-title-detail my-3 text-capitalize">
                  <h2 className="">ชื่อสินค้า: {title}</h2>
                  <h4 className="text-title-detail my-3 text-uppercase grey-text mt-3 mb-2">
                    ผู้ขาย: <span className="text-uppercase">{saler}</span>
                  </h4>
                  <h4 className="blue-text">
                    <strong>
                      ราคา: <span>฿</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    ข้อมูลสินค้า:
                  </p>
                  <p className="grey-text">{info}</p>

                  {/* Buttons */}
                  <div>
                    <Link to='/dashboard'>
                      <ButtonContainer className="text-title-detail">
                        ย้อนกลับหน้าสินค้า
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer cart className="text-title-detail" disabled={inCart ? true : false} onClick={() => {
                      value.addToCart(id)
                      value.openModal(id)
                    }}>
                      ยื่นข้อเสนอ
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )

        }}
      </ItemConsumer>
    );
  }
}
