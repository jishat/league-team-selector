import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './../../logo.png'
import bgimage from '../../images/abstract.jpg';
import batsman from '../../images/batsman3.png';

const Header = () => {
    return (
        <div className="headerImage" style={{  
            backgroundImage: "url(" + bgimage + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className="logo">
                <ul>
                    <li><a href="#" className="active">Teams</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <img src={logo} alt=""/>
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                </ul>
            </div>
            {/* <img src={bgimage} alt="" className="img-fluid"/> */}
            <div className="headerMainContent container">
                <div className="row">
                    <div className="col-5 offset-md-2">
                        <div className="headerContent">
                            <img src={batsman} alt=""/>
                            <h2><span>Developed By AR Jishat </span><br/><span> Bangladesh</span><br/> Premiure <br/>League</h2>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
            </div>
=======
                
            </div>
            
>>>>>>> 65626b70a881f3da34c12656d1c3372796ad01a5
        </div>
    );
};

export default Header;