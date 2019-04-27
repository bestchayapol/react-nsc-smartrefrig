import React, {Component} from 'react';
import SmartRefrig from '../../img/SmartRefrig.png'
import BlueBackground from '../../img/blue_bg.png';

class AboutWeb extends Component {
    render(){
    var backgroundStyle = {
        backgroundImage: `url(${BlueBackground})`
    }
    return(
        <div>
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="fas fa-bars"></i>
                </a>
            </div>
            <div className="section Aboutus" style = {backgroundStyle}>
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
        </div>
    )
}
}

export default AboutWeb;