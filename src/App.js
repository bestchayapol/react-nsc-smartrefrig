import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Hompage/Navbar";
import Home from "./components/Hompage/Home";
import SignInPage from "./components/auth/SignIn";
import SignUpPage from "./components/auth/SignUp";
import Cart from "./components/item/Cart/Cart";
import Details from "./components/item/Details";
import Default from "./components/item/Default";
import star from "./components/shop/star";
import createAddress from "./components/shop/address/createAddress";
import account from "./components/shop/account/account";
import address from "./components/shop/address/address";
import payment from "./components/shop/payment/payment";
import addPayment from "./components/shop/payment/AddPayment";
import CheckOutForm from "./components/shop/payment/CheckOutForm";
import aboutus from "./components/Hompage/aboutus";
import addAccount from "./components/shop/account/addAccount";
import itemlist from "./components/item/Itemlist";
import * as ROUTES from "./constants/routes";
import { withAuthentication } from "./components/Session";
import Dashboard from "./components/item/index";
import Chat from './components/item/Chat'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.HOME} render={() => <Home />} />
        <Route path={ROUTES.ITEMLIST} component={itemlist} />
        <Route path={ROUTES.CHAT} component={Chat} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.ABOUTUS} component={aboutus} />
        <Route path={ROUTES.SIGN_IN} render={() => <SignInPage />} />
        <Route path={ROUTES.SIGN_UP} render={() => <SignUpPage />} />
        <Route path={ROUTES.ACCOUNT} component={account} />
        <Route path={ROUTES.ADD_ACCOUNT} component={addAccount} />
        <Route path={ROUTES.ADDRESS} component={address} />
        <Route path={ROUTES.SAVEITEM} component={Cart} />
        <Route path={ROUTES.DETAIL} component={Details} />
        <Route component={Default} />
        <Route path={ROUTES.STAR} component={star} />
        <Route path={ROUTES.CREATE_ADDRESS} component={createAddress} />
        <Route path={ROUTES.PAYMENT} component={payment} />
        <Route path={ROUTES.ADD_PAYMENT} render={() => <addPayment />} />
        <Route path={ROUTES.CHECKOUT} render={() => <CheckOutForm />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
