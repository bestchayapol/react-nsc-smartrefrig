import React, { Component, Fragment } from "react";
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ItemConsumer } from '../context'
import CartList from './CartList'
import ClearCart from './ClearCart'

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ItemConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="Save Item" />
                  <CartColumns />
                  <CartList value={value} />
                  <ClearCart value={value} />
                </React.Fragment>
              )
            }
            else {
              return <EmptyCart />
            }
          }}
        </ItemConsumer>
      </section>
    );
  }
}
