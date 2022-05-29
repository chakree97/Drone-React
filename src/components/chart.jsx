import "../style/chart.css"

const ChartProduct = (props) =>{
    return <div className="d-flex flex-column product-chart shadow-sm">
        <div className="border-div-img">
            <img src={props.image} alt="product" className="img-product-chart"/>
        </div>
        <div className="description-product-chart bg-white px-3 py-2 d-flex justify-content-between flex-column">
            <p className="product-name">{props.name}</p>
            <div className="d-flex justify-content-between align-items-center">
                <p className="product-price mt-3">{`฿${props.price}`}</p>
                <button className="btn btn-buy">Buy</button>
            </div>
        </div>
    </div>
}

export default ChartProduct;