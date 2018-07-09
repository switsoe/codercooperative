import React from "react";

const Homepage = () => (
    <nav className="navbar navbar-expand-lg navbar-light navbar-transparent" id="navstyle">
      <a className="navbar-brand" href="/"> <img src={require("../components/images/coderCoopTexOnly_GREEN.png")} 
      style={{width: '400px'}}/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">&lt;home /&gt;<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/developers">&lt;developers /&gt;</a>
          </li>
        </ul>
      </div>
    </nav>

);

export default Homepage;
