import React, { Component } from 'react'
import { ItemConsumer } from './context'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'
export default class Modal extends Component {
    render() {
        return (
            <ItemConsumer>
                {value => {
                    const { modalOpen, closeModal } = value

                    const { img, title, price } = value.modalItem

                    console.log(modalOpen)
                    console.log(closeModal)

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col s12 m12 l12 mx-auto center-align text-capitalize">
                                            <h5 className="pad5">บันทึกสินค้า</h5>
                                            <img src={img} width="650" className="responsive-img pad5" alt="item" />
                                            <h5>{title}</h5>
                                            <h5 className="grey-text">ราคา: ฿{price}</h5>
                                            <Link to="/dashboard">
                                                <ButtonContainer className="itemButton" onClick={() => closeModal()}>
                                                    เยี่ยมชมสินค้าต่อ
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/save">
                                                <ButtonContainer cart className="itemButton" onClick={() => closeModal()}>
                                                    สินค้าของฉัน
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ItemConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`
