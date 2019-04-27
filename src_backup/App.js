import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Hompage/Navbar';
import Home from './components/Hompage/Home';
import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import foodList from './components/shop/foodList';
import cart from './components/shop/cart';
import star from './components/shop/star';
import createAddress from './components/shop/address/createAddress';
import account from './components/shop/account/account';
import address from './components/shop/address/address'
import payment from './components/shop/payment/payment'
import addPayment from './components/shop/payment/AddPayment'
import paymentTest from './components/shop/payment/paymentTest'
import CheckOutForm from './components/shop/payment/CheckOutForm'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/foodList" component = {foodList} />
            <Route path = "/signin" component = {signIn} />
            <Route path = "/signup" component = {signUp} />
            <Route path = "/account" component = {account} />
            <Route path = "/address" component = {address} />
            <Route path = "/cart" component = {cart} />
            <Route path = "/star" component = {star} />
            <Route path = "/create" component = {createAddress} />
            <Route path = "/payment" component = {payment} />
            <Route path = "/addpayment" component = {addPayment} />
            <Route path="/testpayment" component={paymentTest} />
            <Route path="/checkout" component={CheckOutForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
