import React, {Component} from 'react';
import SmartRefrig from '../../img/SmartRefrig.png'
import BlueBackground from '../../img/blue_bg.png';
import GreyBackground from '../../img/GreyBackground.jpg';
import carou1 from '../../img/carou1.jpg'
import carou2 from '../../img/carou2.jpg'
import carou3 from '../../img/carou3.jpg'
import carou4 from '../../img/carou4.jpg'
import carou5 from '../../img/carou5.jpg'
import M from 'materialize-css'
import {Link} from 'react-router-dom'
// import {withAuthorization} from '../Session'

class Home extends Component {
    componentDidMount = () => {
        M.AutoInit()
    }
    render(){
    var BluebackgroundStyle = {
        backgroundImage: `url(${BlueBackground})`
    }
    var GreybackgroundStyle = {
        backgroundImage: `url(${GreyBackground})`
    }
    return(
        <div>
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="fas fa-bars"></i>
                </a>
                <ul>
                    <li><Link to='/account' className="btn-floating blue darken-1"><i className="material-icons">account_circle</i></Link></li>
                    <li><Link to='/cart' className="btn-floating purple darken-1"><i className="material-icons">add_shopping_cart</i></Link></li>
                    <li><Link to='/star' className="btn-floating green darken-1"><i className="material-icons">star</i></Link></li>
                </ul>
            </div>
            <div className="section Aboutus" style = {BluebackgroundStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col s6 m6 l6 part1"><img src={SmartRefrig} alt="AboutWebImage"/></div>
                        <div className="col s6 m6 l6 part1">
                        <h4>Smart Refrig is the refrigation that will help you to remind such as open refrig,
                            Temperature, and Humidity
                        </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

            <div className="section Feature" style = {GreybackgroundStyle} id="features"> 
                <div className="container"> 
                    <div className="row">
                        <div className="feature-box col l4 m12 s12">
                            <i className="icon fas fa-check-circle fa-4x"></i>
                            <h3 className="feature-title">ง่ายในการใช้</h3>
                        </div>
                        <div className="feature-box col l4 m12 s12">
                        <i className="icon fas fa-bullseye fa-4x"></i>
                            <h3 className="feature-title">ไม่ต้องกังวลเรื่องคุณภาพอาหาร</h3>
                        </div>
                        <div className="feature-box col l4 m12 s12">
                        <i className="icon fas fa-heart fa-4x"></i>
                            <h3 className="feature-title">ยืนยันจากผู้เชี่ยวชาญ</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

            <div className="section Support" style = {BluebackgroundStyle}>
                <div className="container">
                    <div className="row">
                        <h2 align="center">Our Food Menu</h2>
                        <div className="carousel">
                            <a className="carousel-item" href="#one!"><img src={carou1} alt="carousel1" /></a>
                            <a className="carousel-item" href="#two!"><img src={carou2} alt="carousel2" /></a>
                            <a className="carousel-item" href="#three!"><img src={carou3} alt="carousel3" /></a>
                            <a className="carousel-item" href="#four!"><img src={carou4} alt="carousel4" /></a>
                            <a className="carousel-item" href="#five!"><img src={carou5} alt="carousel5" /></a>
                         </div>
                    </div> 
                </div>
            </div>
            <div className="divider"></div>

            <footer className="section Footer" style = {GreybackgroundStyle} id="footers"> 
                        <a href="#" alt='twitter'><i className = "social-icon fab fa-twitter"></i></a>
                        <a href="#" alt='facebook'><i className = "social-icon fab fa-facebook-f"></i></a>
                        <a href="#" alt='twitter'><i className = "social-icon fab fa-instagram"></i></a>
                        <a href="#" alt='twitter'><i className = "social-icon fas fa-envelope-square"></i></a>
                        <p>Credit: Chayapol Mahatthanachai</p>
            </footer>
            <div className="divider"></div>
        </div>
    )
}
}

// const condition = authUser => !!authUser;

export default Home