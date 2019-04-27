import React, {Component} from 'react';
import GreyBackground from '../../img/GreyBackground.jpg';

class Footer extends Component {
    render(){
    var backgroundStyle = {
        backgroundImage: `url(${GreyBackground})`
    }
    return(
        <div>
            <footer className="section Footer" style = {backgroundStyle} id="footers"> 
                        <i className = "social-icon fab fa-twitter"></i>
                        <i className = "social-icon fab fa-facebook-f"></i>
                        <i className = "social-icon fab fa-instagram"></i>
                        <i className = "social-icon fas fa-envelope-square"></i>
                        <p>Credit: Chayapol Mahatthanachai</p>
            </footer>
            <div className="divider"></div>
        </div>
    )
}
}

export default Footer;