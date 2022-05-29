import "../style/feature.css"
import HelpFul from "./helpful";

const FeaturePage = () =>{
    const reviewArr = [
        {
            img : "https://media.istockphoto.com/photos/quadcopter-drone-with-4k-video-camera-flying-in-the-air-picture-id911190112?k=20&m=911190112&s=612x612&w=0&h=6mkFfZ_h5OVzYH_b0DVaYMdMZd86Zn8MZH89gWPJN0w=",
            article : "Solution 1.How fix drone problem?",
            name : "unknown"
        },
        {
            img : "https://blazetrends.com/wp-content/uploads/2021/11/Jihadists-paramilitaries-the-worrying-use-of-drones-by-criminal-groups.jpg",
            article : "Solution 2.How fix drone problem?",
            name : "unknown"
        },
        {
            img : "https://www.southwhidbeyrecord.com/wp-content/uploads/2021/10/26910687_web1_TSR-SWR-20211021-Skyline-X-Drone-Teaser.jpeg",
            article : "Solution 3.How fix drone problem?",
            name : "unknown"
        }
    ]
    return <div className="container d-flex flex-column justify-content-center align-items-center feature" id="feature">
        <br/>
        <br/>
        <span>
            <h4 className="d-inline">Helpful </h4>
            <h4 className="d-inline text-orange">tips and trick</h4>
        </span>
        <br />
        <p className="feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam amet placeat laborum ipsa officia soluta maxime voluptas praesentium facilis nostrum, explicabo quis hic aspernatur harum magnam at odit! Repellendus!</p>
        <br />
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                {
                   reviewArr.map(
                       (item,i)=>
                       <div className="col-6 col-sm-4 mb-5 d-flex justify-content-center" key={i}>
                           <HelpFul image={item.img} article={item.article} name={item.name}/>
                       </div>
                    )
                }
            </div>
        </div>
        <br />
        <button className="btn btn-feature">View All</button>
    </div>;
}

export default FeaturePage;