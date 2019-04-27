import React, { Component } from "react";
import Item from "./Item";

import { ItemConsumer } from './context'

class Itemlist extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="container ItemListMargin">
            <div className="row">
              <ItemConsumer>
                {value => {
                  return value.items.map(item => {
                    return (
                      <div className="row">
                        <div className="col s12 m12 l12">
                          <Item key={item.id} item={item} />
                        </div>
                      </div>
                    )
                  })
                }}
              </ItemConsumer>
            </div>
          </div>
        </React.Fragment>
      </div>

    );
  }
}
// const condition = authUser => !!authUser;

export default Itemlist;
