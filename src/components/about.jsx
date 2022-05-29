import ReactStars from "react-rating-stars-component";
import "../style/about.css"

const AboutPage = () =>{
    return <div className="container d-flex flex-column justify-content-center align-items-center about" id="about">
        <br/>
        <br/>
        <div className="container d-flex flex-column justify-content-center  align-items-center">
            <div className="container d-flex justify-content-center align-items-center">
                <img className="logo-user-3" src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt="logo-user"/>
                <img className="logo-user-2" src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt="logo-user"/>
                <img className="logo-user-1" src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt="logo-user"/>
                <img className="logo-user-center" src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt="logo-user"/>
                <img className="logo-user-1" src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt="logo-user"/>
                <img className="logo-user-2" src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt="logo-user"/>
                <img className="logo-user-3" src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt="logo-user"/>
            </div>
            <br />
            <div className="review-user d-flex flex-column justify-content-center align-items-center bg-white p-2 round shadow-sm">
                <ReactStars 
                    count={5}
                    value={5}
                    size={12}
                    activeColor="#FFBF00"
                />
                <p className="description-review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem tempora dolore officiis similique sit vel laudantium ratione saepe molestias illo accusantium in, architecto eaque laboriosam omnis quibusdam dignissimos, unde eligendi.</p>
                <p className="name-user">Unknown user</p>
            </div>
        </div>
        <div className="container review">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center mb-2">
                    <img src="https://media.wired.com/photos/5a57f916be039d355e73654f/16:9/w_2400,h_1350,c_limit/droneintercept-530073912.jpg" alt="drone-mission-image" className="drone-mission-image"/>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-center mb-2">
                    <div>
                        <h4 className="d-inline">Our Drones </h4>
                        <h4 className="d-inline text-orange">save </h4>
                        <h4 className="d-inline">and mission </h4>
                        <h4 className="d-inline text-orange">capable</h4>
                    </div>
                    <p className="description-about-mission">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta eius quaerat nesciunt non ab</p>
                    <button className="btn btn-view-all">View all</button>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
}

export default AboutPage;