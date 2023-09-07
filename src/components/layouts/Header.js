import React from "react"

export default function Header (){

  
    return(
        <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img width="200px" src="./talenq.png" alt="pic"/>
          </div>
        </div>
  
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
  
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login_btn">Login</button>

          
  
          
        </div>
      </nav>
    )
}