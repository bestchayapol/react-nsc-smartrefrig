import React, { Component } from "react";
import Itemlist from "./Itemlist";
import M from 'materialize-css'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import Title from './Title';
import AddItem from './AddItem';
import Modal from './Modal'

export default class Dashboard extends Component {
  componentDidMount = () => {
    M.AutoInit()
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instance = M.Sidenav.getInstance(elems)
    })
  }
  render() {
    return (
      <div>
        <Title name="our" title="products" />
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <AddItem />
              <Itemlist />
              <Modal />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
