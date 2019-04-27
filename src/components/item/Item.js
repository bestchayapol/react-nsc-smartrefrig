import React, { Component } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ItemConsumer } from './context'
import PropTypes from 'prop-types'
import * as ROUTES from '../../constants/routes'

export default class Item extends Component {
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   if (this.props.item.inCart === nextProps.item.inCart) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }
  render() {
    const { id, info, title, img, price, inCart } = this.props.item
    console.log(inCart)
    return (
      <div className="row">
        <ProductWrapper>
          <ItemConsumer>
            {value => (
              <div className="card medium" onClick={() => {
                value.handleDetail(id)
              }}>

                <div className="card-image">
                  <Link to={ROUTES.DETAIL}>
                    <img src={img} className="img-container" alt="item" />
                  </Link>
                  <span className="card-title">
                    <button className="cart-btn" disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id)
                        value.openModal(id)
                      }}>
                      {inCart ? (
                        <p className="CardText" disabled>inSave</p>)
                        : (
                          <i className="material-icons">save</i>
                        )}
                    </button></span>
                </div>

                <div className="card-content">
                  <p>{info}</p>
                </div>
                <div className="card-action">
                  <p className="mb-0">
                    {title}
                  </p>
                  <h5 className="blue-text font-italic mb-0">
                    <span className="mr-1">฿</span>
                    {price}
                  </h5>
                </div>
              </div>
            )}
          </ItemConsumer>
        </ProductWrapper>
      </div >
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  })
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-action {
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border-color: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-action {
      background: rgba(247,247,247);
    }
  }
  img {
    position: relative;
    overflow: hidden;
  }
  .card-image {
    transition: all 1s linear;
  }
  img:hover .card-image {
    transform: scale(1.2)
  }
  .cart-btn {
    position: absolute;
    bottom:0
    left: 0
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0 0.5rem 0 0;
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
