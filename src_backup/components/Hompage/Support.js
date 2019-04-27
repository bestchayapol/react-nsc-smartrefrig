import React, {Component} from 'react';
import BlueBackground from '../../img/blue_bg.png';
import Carou1 from '../../img/carou1.jpg';
import Carou2 from '../../img/carou2.jpg';
import Carou3 from '../../img/carou3.jpg';
import Carou4 from '../../img/carou4.jpg';
import Carou5 from '../../img/carou5.jpg';

class Support extends Component {
    render(){
    var backgroundStyle = {
        backgroundImage: `url(${BlueBackground})`
    }
    return(
        <div>
            <div className="section Support" style = {backgroundStyle}>
                <div className="container">
                    <div className="row">
                        <h2 align="center">Our Food Menu</h2>
                        <div className="carousel">
                            <a className="carousel-item" href="#one!"><img src={Carou1} alt="carousel1" /></a>
                            <a className="carousel-item" href="#two!"><img src={Carou2} alt="carousel2" /></a>
                            <a className="carousel-item" href="#three!"><img src={Carou3} alt="carousel3" /></a>
                            <a className="carousel-item" href="#four!"><img src={Carou4} alt="carousel4" /></a>
                            <a className="carousel-item" href="#five!"><img src={Carou5} alt="carousel5" /></a>
                         </div>
                    </div> 
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}
}

export default Support;