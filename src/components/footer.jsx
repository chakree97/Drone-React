import dronelogo from "../img/dronelogo.png"
import facebooklogo from "../img/logofacebook.png"
import twitterlogo from "../img/logotwitter.png"
import googlelogo from "../img/logogoogle.png"
import "../style/footer.css"

const Footer = () =>{
    return <div className="footer bg-white p-2 ">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-2">
                    <img src={dronelogo} alt="drone-logo" width="150px" height="100px"/>
                    <br />
                    <p className="footer-description px-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa mollitia molestiae delectus culpa nemo blanditiis saepe</p>
                    <div className="d-flex">
                        <img width="24px" height="24px" className="mx-2" src={facebooklogo} alt="social-logo"/>
                        <img width="24px" height="24px" className="mx-2" src={twitterlogo} alt="social-logo"/>
                        <img width="24px" height="24px" className="mx-2" src={googlelogo} alt="social-logo"/>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-2 d-flex flex-column justify-content-center">
                    <h6>Lorem</h6>
                    <p className="footer-title">Lorem</p>
                    <p className="footer-title">ipsum</p>
                    <p className="footer-title">dolor</p>
                    <p className="footer-title">sit amet</p>
                    <p className="footer-title">consectetur</p>
                    <p className="footer-title">adipisicing elit</p>
                </div>
                <div className="col-6 col-sm-4 col-md-2 d-flex flex-column justify-content-center">
                    <h6>Lorem</h6>
                    <p className="footer-title">Lorem</p>
                    <p className="footer-title">ipsum</p>
                    <p className="footer-title">dolor</p>
                    <p className="footer-title">sit amet</p>
                    <p className="footer-title">consectetur</p>
                    <p className="footer-title">adipisicing elit</p>
                </div>
                <div className="col-12 col-sm-4 col-md-2 d-flex flex-column justify-content-center">
                    <h6>Lorem</h6>
                    <p className="footer-title">Lorem</p>
                    <p className="footer-title">ipsum</p>
                    <p className="footer-title">dolor</p>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;