import "../style/home.css"

const Home = ()=>{
    return(
        <div className="container home my-3 d-flex flex-column justify-content-center align-items-center">
            <div className="content row bg-white shadow-sm">
                <div className="info d-flex flex-column justify-content-center col-12 col-sm-6">
                    <div>
                        <h6 className="d-inline">The Most </h6>
                        <h6 className="header d-inline"> Interesting Drone</h6>
                        <h6 className="d-block">In The World.</h6>
                    </div>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum neque blanditiis voluptate? Totam eaque sunt, voluptate unde illum repellat expedita nobis nostrum possimus alias voluptatum, ex quis, aliquid fugit aut.</p>
                    <br />
                    <div className="d-flex">
                        <button className="btn btn-buynow">
                            Buy Now
                        </button>
                        <button className="btn btn-watchdemo ms-3">
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div className="img d-flex justify-content-center align-items-center col-12 col-sm-6">
                    <img className="img-drone" src="https://www.pngmart.com/files/6/Drone-Transparent-Images-PNG.png" alt='img-drone'/>
                </div>
            </div>
            <div className="viewer bg-white shadow-sm d-flex justify-content-around align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="follow-text">
                        50k+
                    </h5>
                    <p>Follow</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="like-text">
                        70k+
                    </h5>
                    <p>Like</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="sale-text">
                        120k+
                    </h5>
                    <p>Sale</p>
                </div>
            </div>
        </div>
    );
}

export default Home;