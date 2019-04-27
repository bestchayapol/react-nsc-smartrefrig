import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import PurpleBg from '../../../img/purplebg.jpg'
import BlueBg from '../../../img/blueGrandientBg.png'
import ViewBg from '../../../img/viewBg.png'
import person from '../../../img/person.jpg'
import auth, { database, storage } from '../../Firebase/firebase';
import sadIcon from '../../../img/sadIcon.gif';
import * as ROUTES from '../../../constants/routes';
import FileUploader from 'react-firebase-file-uploader';

class account extends Component {
    state = {
        users: '',
        username: '',
        personId: '',
        phone: '',
        image: '',
        imageUrl: '',
        progress: 0,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        const { username, personId, phone } = this.state;
        e.preventDefault();
        return database.ref(`user/${auth.currentUser.uid}`).update({
            name: username,
            personId,
            telephone: phone,
        });
    }

    handleUploadStart = () => {
        this.setState({ progress: 0 });
    }

    handleUploadSuccess = (filename) => {
        this.setState({
            progress: 100,
            image: filename,
        });
        storage.ref('userUrl').child(filename).getDownloadURL().then(url => this.setState({
            imageUrl: url,
        }));
    }

    // handleImageUpload = (e) => {
    //     if(e.target.files[0]) {
    //         const image = (e.target.files[0])
    //         const storageRef = storage.ref('userUrl/' + image.name)
    //         const uploadTask = storageRef.put(image)
    //         uploadTask.on('state_changed', snapshot => {
    //             console.log(snapshot)
    //         },
    //         (error) => {
    //             console.log(error)
    //             },
    //         () => {
    //             storage.ref('userUrl').child(image.name).getDownloadURL().then(url => {
    //                 this.setState({url})
    //             })
    //             //get metadata
    //             // storageRef.getMetadata().then((metadata) => {
    //             //     let metadatafile = {
    //             //         downloadURLs: metadata.downloadURLs[0]
    //             //     }
    //             //     //send data to userUrl in firebase realtime database
    //             //     const dbRef = database.ref('user/'+ auth.currentUser.uid)
    //             //     dbRef.update({metadatafile})
    //             // })
    //             }
    //         )
    //     }
    // }
    componentDidMount = () => {
        M.AutoInit();
        document.addEventListener('DOMContentLoaded', () => {
            let elems = document.querySelectorAll('.modal');
            let instances = M.Modal.init(elems);
            let trigger = document.querySelectorAll('.modal-trigger');
        });

        auth.onAuthStateChanged((user) => {
            const { imageUrl } = this.state;
            if (user) {
                console.log(user.uid);
                return database.ref(`user/${user.uid}`).on('value', (snapshot) => {
                    const user = snapshot.val();
                    this.setState({
                        users: user,
                        imageUrl: user.userUrl,
                    });
                });
            }
            return database.ref(`user/${user.uid}`).update({
                userUrl: imageUrl,
            });
        });
    }

    componentWillUnmount = () => {
        database.ref('user').off();
    }

    render() {
        console.log(this.state);
        const PurpleBackground = {
            backgroundImage: `url(${PurpleBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        };
        const BlueBackground = {
            backgroundImage: `url(${BlueBg})`,
        };
        const ViewBackground = {
            backgroundImage: `url(${ViewBg})`,
        };

        const { users, image, imageUrl } = this.state;

        return (
            <div>
                <div className="section AccountHeader" style={BlueBackground}>
                    <h3 className="myAccount" align="center">บัญชีของฉัน</h3>
                </div>
                <div className="section AccountBody" style={ViewBackground}>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="box">
                                    <div className="my-account-section__header">
                                        <div className="my-account-section__header-title">ข้อมูลของฉัน</div>
                                    </div>
                                    <div className="my-account-profile">
                                        <div className="my-account-profile__left">
                                            {users.personId
                                                ? (
                                                    <div>
                                                        <div className="input-with-label">
                                                            <div className="input-with-label__wrapper">
                                                                <div className="input-with-label__label">
                                                                    <label htmlFor="name">ชื่อ: </label>
                                                                </div>
                                                                <div className="input-with-label__content">
                                                                    <div className="input-with-validator-wrapper">
                                                                        <div className="input-with-validator">
                                                                            {users.name}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-with-label">
                                                            <div className="input-with-label__wrapper">
                                                                <div className="input-with-label__label">
                                                                    <label htmlFor="name">เลขประจำตัว: </label>
                                                                </div>
                                                                <div className="input-with-label__content">
                                                                    <div className="input-with-validator-wrapper">
                                                                        <div className="input-with-validator">
                                                                            {users.personId}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-with-label">
                                                            <div className="input-with-label__wrapper">
                                                                <div className="input-with-label__label">
                                                                    <label htmlFor="name">เบอร์โทรศัพท์: </label>
                                                                </div>
                                                                <div className="input-with-label__content">
                                                                    <div className="input-with-validator-wrapper">
                                                                        <div className="input-with-validator">
                                                                            {users.telephone}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col s12 m12 l12" align="center">
                                                                    <Link to={ROUTES.ADD_ACCOUNT} className="orange btn waves-effect waves-light modal-trigger">แก้ไขข้อมูลส่วนตัว</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                : (
                                                    <div className="container" align="center">
                                                        <div className="row">
                                                            <div className="col s6 l6 m6">
                                                                <img src={sadIcon} alt="sadIcon" width="120" height="120" />
                                                                <p className="red-text text-darken-2">คุณยังไม่มีข้อมูลส่วนตัว</p>
                                                            </div>
                                                            <div className="col s6 l6 m6">
                                                                <a className="blue btn-large waves-effect waves-light modal-trigger editBtn" href="#AddNewAddress">
                                                                    <i className="material-icons left">add</i>
                                                                    เพิ่มข้อมูลส่วนตัว
</a>

                                                                {/* Modal Structure */}
                                                                <div id="AddNewAddress" className="modal">
                                                                    <div className="modal-content">
                                                                        {/* Header */}
                                                                        <div className="refrig-popup-form__header">
                                                                            <div className="refrig-popup-form__title">
                                                                                เพิ่มที่อยู่ใหม่
                                                        </div>
                                                                        </div>
                                                                        <br />

                                                                        {/* Address Form */}
                                                                        <form onSubmit={this.handleSubmit}>
                                                                            <div className="refrig-popup-form__main">
                                                                                <div className="refrig-popup-form__main-container">
                                                                                    <div className="address-modal__form_input">
                                                                                        <div className="input-with-status">
                                                                                            <div className="input-with-status__wrapper">
                                                                                                <input className="input-with-status__input" onChange={this.handleChange} type="text" required placeholder="ชื่อ" id="username" maxLength="64" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="address-modal__form_input">
                                                                                        <div className="input-with-status">
                                                                                            <div className="input-with-status__wrapper">
                                                                                                <input className="input-with-status__input" onChange={this.handleChange} type="text" placeholder="เลขประจำตัวประชาชน" id="personId" required maxLength="64" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="address-modal__form_input">
                                                                                        <div className="input-with-status">
                                                                                            <div className="input-with-status__wrapper">
                                                                                                <input className="input-with-status__input" id="phone" onChange={this.handleChange} value={this.state.phone} required type="text" placeholder="เบอร์โทรศัพท์" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="cancel" className="modal-close waves-effect waves-red btn-flat">ยกเลิก</button>
                                                                                <button className="waves-effect btn waves-green">ยืนยัน</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                        <div className="my-account-profile__right">
                                            <div className="avatar-uploader">
                                                <div className="avatar-uploader__avatar">
                                                    <div className="avatar-uploader__avatar-image">
                                                        {image && <img className="circle" src={`${imageUrl}`} width="90" height="90" alt="profile" />}
                                                    </div>
                                                </div>
                                                <div className="file-field input-field">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col s12 l12 m12">
                                                                {/* uploadBtn */}
                                                                <div className="btn purple waves-effect waves-light">
                                                                    <span>อัพโหลดไฟล์</span>
                                                                    <input onChange={this.handleImageUpload} type="file" accept=".jpg,.jpeg,.png" />
                                                                    <FileUploader
                                                                        accept="image/*"
                                                                        name="image"
                                                                        storageRef={storage.ref('userUrl')}
                                                                        onUploadStart={this.handleUploadStart}
                                                                        onUploadSuccess={this.handleUploadSuccess}
                                                                        metadata={{ cacheControl: 'max-age=3600' }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input type="text" className="file-path validate" />

                                                </div>
                                            </div>
                                            {/* <img className="circle" src={person} width="90" height="90" alt="profile"/>
                                            <button className="btn purple waves-effect waves-light profileBtn" type="submit">เปลี่ยนรูปโปรไฟล์</button>  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// const condition = authUser => !!authUser;

export default account;
