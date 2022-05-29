import "../style/shop.css"
import img1 from "../img/smartwatch.png"
import img2 from "../img/smartwatch1.png"
import img3 from "../img/smartwatch2.png"
import img4 from "../img/smartwatch3.png"
import ChartProduct from "./chart"

const ShopPage = () =>{
    const productArr = [
        {
            img : "https://media.istockphoto.com/photos/quadcopter-drone-with-4k-video-camera-flying-in-the-air-picture-id911190112?k=20&m=911190112&s=612x612&w=0&h=6mkFfZ_h5OVzYH_b0DVaYMdMZd86Zn8MZH89gWPJN0w=",
            name : "Drone Copter XX-01 New Release",
            price : 30000
        },
        {
            img : "https://blazetrends.com/wp-content/uploads/2021/11/Jihadists-paramilitaries-the-worrying-use-of-drones-by-criminal-groups.jpg",
            name : "Drone Copter XX-02 New Release",
            price : 40000
        },
        {
            img : "https://www.southwhidbeyrecord.com/wp-content/uploads/2021/10/26910687_web1_TSR-SWR-20211021-Skyline-X-Drone-Teaser.jpeg",
            name : "Drone Copter XX-03 New Release",
            price : 60000
        },        {
            img : "https://www.tienda24hs.com/WebRoot/StoreES/Shops/62148069/5C1A/35EB/9E6A/23E4/B59E/0A0C/6D00/8D7D/180205-dron-acuatico-spry-sports-drone-c.png",
            name : "Drone Copter XX-04 New Release",
            price : 20000
        }
    ]


    return <div className="bg-light d-flex flex-column justify-content-center align-items-center shop" id="shop">
        <br />
        <span>
            <h3 className="d-inline">Why Choose Our </h3>
            <h3 className="d-inline product">Products</h3>
        </span>
        <br/>
        <p className="description-shop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad numquam aperiam, rerum harum quae inventore deserunt, repellendus officia ducimus rem nam similique voluptas quidem dicta veniam, modi sapiente. Hic.</p>
        <br/>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-6 col-md-3 col-sm-3 d-flex flex-column justify-content-center align-items-center px-2 py-3">
                    <img src={img1} className="img-logo" alt='img-logo1'/>
                    <h6 className="header-logo mt-2">24/7 Premium</h6>
                    <p className="description-shop">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="col-6 col-md-3 col-sm-3 d-flex flex-column justify-content-center align-items-center px-2 py-3">
                    <img src={img2} className="img-logo" alt='img-logo2'/>
                    <h6 className="header-logo mt-2">Best Quality</h6>
                    <p className="description-shop">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="col-6 col-md-3 col-sm-3 d-flex flex-column justify-content-center align-items-center px-2 py-3">
                    <img src={img3} className="img-logo" alt='img-logo3'/>
                    <h6 className="header-logo mt-2">30 Days Pattern</h6>
                    <p className="description-shop">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="col-6 col-md-3 col-sm-3 d-flex flex-column justify-content-center align-items-center px-2 py-3">
                    <img src={img4} className="img-logo" alt='img-logo4'/>
                    <h6 className="header-logo mt-2">Free Skipping</h6>
                    <p className="description-shop">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
        <br />
        <div className="shop-description d-flex flex-column justify-content-center align-items-center">
            <span>
                <h3 className="d-inline">Special </h3>
                <h3 className="d-inline product">feature </h3>
                <h3 className="d-inline">of our drone.</h3>
            </span>
            <br />
            <p className="description-shop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad numquam aperiam, rerum harum quae inventore deserunt, repellendus officia ducimus rem nam similique voluptas quidem dicta veniam, modi sapiente. Hic.</p>
            <br />
            <br />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    {
                        productArr.map((item,i)=> 
                            <div className="py-4 d-flex justify-content-center align-items-center col-6 col-sm-4 col-md-4 col-lg-3 " key={i}>
                                <ChartProduct name={item.name} image={item.img} price={item.price}/>
                            </div>
                        )
                    }
                </div>
            </div>
            <br />
            <br />
        </div>
    </div>
}

export default ShopPage;