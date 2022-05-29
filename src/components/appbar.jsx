import { useState } from 'react';
import dronelogo from '../img/dronelogo.png'
import '../style/appbar.css'

const AppBar = () =>{
    const [tgNavBar,settgNavBar] = useState(false);
    return <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
    <div className="container-fluid d-flex justify-content-between">
      <a className="navbar-brand" href="/#"><img src={dronelogo} width="120px" height="60px"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        onClick={()=>{
            settgNavBar(!tgNavBar)
        }} 
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className={(tgNavBar)? "nav navbar-collapse":"nav collapse navbar-collapse"}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#" onClick={()=>settgNavBar(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#shop" onClick={()=>settgNavBar(false)}>Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about" onClick={()=>settgNavBar(false)}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#feature" onClick={()=>settgNavBar(false)}>Feature</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#blogs" onClick={()=>settgNavBar(false)}>Blogs</a>
          </li>
      </ul>
      <button className="btn btn-navbar">
        Buy Now
      </button>
    </div>
  </nav>
}

export default AppBar;