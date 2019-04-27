import React, { Component } from 'react'
import { storeItems, detailItem } from './data'

const ItemContext = React.createContext();

class ItemProvider extends Component {
    state = {
        items: [],
        detailItem: detailItem,
        cart: [],
        modalOpen: false,
        modalItem: detailItem
    }
    componentDidMount = () => {
        this.setItems()
    }
    setItems = () => {
        let tempItems = []
        storeItems.forEach(item => {
            const singleItem = { ...item }
            tempItems = [...tempItems, singleItem]
        });
        this.setState(() => {
            return { items: tempItems }
        })
    }
    // setDetail = () => {
    //     let tempDetail = []
    //     storeItems.forEach(detail => {
    //         const singleDetail = { ...detail }
    //         tempDetail = [...tempDetail, singleDetail]
    //     });
    //     this.setState(() => {
    //         return { detailItem: tempDetail }
    //     })
    // }
    getItem = (id) => {
        const item = this.state.items.find(item => item.id === id)
        return item
    }
    handleDetail = (id) => {
        const item = this.getItem(id)
        this.setState(() => {
            return { detailItem: item }
        })
    }
    removeItem = (id) => {
        const tempItems = [...this.state.items]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempItems.indexOf(this.getItem(id))
        const removeItem = tempItems[index]
        removeItem.inCart = false
        this.setState(() => {
            return {
                cart: [...tempCart],
                items: [...tempItems]
            }
        })
    }
    clearSave = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            this.setItems()
        })
    }
    addToCart = (id) => {
        let tempItems = [...this.state.items]
        const index = tempItems.indexOf(this.getItem(id))
        const item = tempItems[index]
        item.inCart = true
        item.count = 1
        const price = item.price
        item.total = price
        this.setState(() => {
            return { items: tempItems, cart: [...this.state.cart, item] }
        }, () => {
            console.log(this.state)
        })
    }
    openModal = id => {
        const item = this.getItem(id);
        this.setState(() => {
            return { modalItem: item, modalOpen: true }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <ItemContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    removeItem: this.removeItem,
                    clearSave: this.clearSave
                }}
                >
                    {this.props.children}
                </ItemContext.Provider>
            </div>
        )
    }
}

const ItemConsumer = ItemContext.Consumer

export { ItemProvider, ItemConsumer }





