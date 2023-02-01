import React from "react";

export default function Navbar(props){
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Marketplace</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Clothing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Electronics</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Sell Your Product</a>
                  </li>
                  <li class="nav-item">
                    <button class="nav-link active text-dark" aria-current="page" href="#">Connect</button>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>

          

        </>
    )


}