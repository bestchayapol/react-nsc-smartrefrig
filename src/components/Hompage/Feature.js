import React, {Component} from 'react';
import GreyBackground from '../../img/GreyBackground.jpg';

class Feature extends Component {
    render(){
    var backgroundStyle = {
        backgroundImage: `url(${GreyBackground})`
    }
    return(
        <div>
            <div className="section Feature" style = {backgroundStyle} id="features"> 
                <div className="container"> 
                    <div className="row">
                        <div className="feature-box col l4 m12 s12">
                            <i className="icon fas fa-check-circle fa-4x"></i>
                            <h3 className="feature-title">Easy to Use</h3>
                        </div>
                        <div className="feature-box col l4 m12 s12">
                        <i className="icon fas fa-bullseye fa-4x"></i>
                            <h3 className="feature-title">Don't Worry In your Food</h3>
                        </div>
                        <div className="feature-box col l4 m12 s12">
                        <i className="icon fas fa-heart fa-4x"></i>
                            <h3 className="feature-title">Confirm From Expert</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}
}

export default Feature;