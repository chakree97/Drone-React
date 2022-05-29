import '../style/chart.css'

const HelpFul = (props) =>{
    return <div className="d-flex flex-column product-chart shadow-sm">
        <div className="border-div-img">
            <img src={props.image} alt="product" className="img-product-chart"/>
        </div>
        <div className="description-product-chart bg-white px-3 py-2 d-flex justify-content-between flex-column">
            <div className="d-flex justify-content-between align-items-center flex-column">
                <p className="product-article">{props.article}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex pt-3'>
                    <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt="logo-user" className='logo-user-help' />
                    <p className="helpful-name ms-2">{props.name}</p>
                    </div>
                    <button className="btn-views-help ms-4">View</button>
                </div>
            </div>
        </div>
    </div>
}

export default HelpFul;