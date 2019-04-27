import React, { Component } from 'react'
import auth, { database, storage } from '../Firebase/firebase'
import M from 'materialize-css'
import FileUploader from 'react-firebase-file-uploader';
import { Link } from 'react-router-dom';

export default class AddItem extends Component {
    state = {
        items: '',
        ItemName: '',
        price: '',
        expire: '',
        name: '',
        Detail: ''
    }
    componentDidMount = () => {
        M.AutoInit()

        auth.onAuthStateChanged(user => {
            if (user) {
                return database.ref('user/' + user.uid).on('value', snapshot => {
                    const item = snapshot.val()
                    this.setState({
                        items: item
                    })
                })
            }
        })
    }
    componentWillUnmount = () => {
        database.ref('user').off();
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { ItemName, price, expire, name, Detail } = this.state
        database.ref('user/' + auth.currentUser.uid).push({
            username: name,
            title: ItemName,
            price: price,
            expire: expire,
            detail: Detail
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large waves-effect waves-light red">
                        <i className="fas fa-bars"></i>
                    </a>
                    <ul>
                        <li><a data-target="AddItem" className="btn-floating blue darken-1 modal-trigger"><i className="material-icons">add</i></a></li>
                        <li><Link to='/save' className="btn-floating purple darken-1"><i className="material-icons">save</i></Link></li>

                        <div id="AddItem" className="modal">
                            <div className="modal-content">
                                <h4>เพิ่มสินค้า</h4>
                                <div className="row">
                                    <form onSubmit={this.handleSubmit} className="col s12">
                                        <div className="row modal-form">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">card_travel</i>
                                                <input onChange={this.handleChange} type="text" id="ItemName" required />
                                                <label for="icon_prefix">ชื่อสินค้า</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">card_travel</i>
                                                <input onChange={this.handleChange} type="text" id="price" required />
                                                <label for="icon_prefix">ราคา</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">event</i>
                                                <input type="text" className="datepicker" id="expire" />
                                                <label for="icon_prefix">วันที่หมดอายุ</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input onChange={this.handleChange} type="text" id="name" />
                                                <label for="icon_prefix">ชื่อ-สกุล</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">account_circle</i>
                                                <textarea onChange={this.handleChange} id="Detail" className="materialize-textarea validate"></textarea>
                                                <label for="icon_prefix">รายละเอียด</label>
                                            </div>
                                            <div className="file-field input-field">
                                                <div className="btn waves-effect waves-light purple">
                                                    <span>อัพโหลดไฟล์</span>
                                                    <input type="file" accept=".jpg,.jpeg,.png" />
                                                    <FileUploader
                                                        accept="image/*"
                                                        name="image"
                                                        storageRef={storage.ref('userUrl')}
                                                        onUploadStart={this.handleUploadStart}
                                                        onUploadSuccess={this.handleUploadSuccess}
                                                        metadata={{ cacheControl: 'max-age=3600' }}
                                                    />
                                                    <input type="text" className="file-path validate" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <a href="#!" className="modal-close waves-effect waves-red btn-flat">ยกเลิก</a>
                                <a href="#!" className="modal-close waves-effect waves-green btn-flat">เพิ่มสินค้า</a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div >
        )
    }
}
