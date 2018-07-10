import React from "react";
import knowpills from './images/knowpills.png';
import drknow from './images/drknow.png';
import cryptoCoin from './images/cryptoCoin.png';

const Work = () => (
  <div className="container-fluid work">
    <div className="row workrow">
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={knowpills} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Know Pills</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="http://knowpills.net/" className="btn btn-primary">Visit</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={drknow} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Dr. Know</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://github.com/Pritch13/Project1BC" className="btn btn-primary">Visit</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={cryptoCoin} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">cryptoCoin</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://robertdthompson.github.io/CryptoCoin/home.html" className="btn btn-primary">Visit</a>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Work;
