import "../style/blogs.css"

const BlogsPage = ()=>{
    return <div className="d-flex flex-column justify-content-center align-items-center blogs" id="blogs">
        <br/>
        <br/>
        <span>
            <h4 className="d-inline">Subscribe for the latest </h4>
            <h4 className="d-inline text-orange">tips and offers</h4>
        </span>
        <br />
        <p className="blogs-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam amet placeat laborum ipsa officia soluta maxime voluptas praesentium facilis nostrum, explicabo quis hic aspernatur harum magnam at odit! Repellendus!</p>
        <br />
        <br />
        <div className="d-flex">
            <input placeholder="Search"/>
            <button className="btn btn-blogs-search">Search</button>
        </div>
        <br />
    </div>
}

export default BlogsPage;