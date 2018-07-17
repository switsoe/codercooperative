import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  // Determines content to show based on users login status
  renderContent() {
    switch (this.props.auth) {
      case null:
        return; // returns nothing if null

      case false: ;
        return (
          <li>
            <a href="/auth/google">Login With Google /</a>
          </li>
        );

      default:
        return (
          <li>
            <a href="/api/logout">Logout /</a>
          </li>
        );
    }
  }

  render() {
    // this.props contains the users login object
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="/" className="brand-logo">
            <img src={require("./images/coderCoopTexOnly_GREEN.png")} style={{ width: '400px' }} />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home /</a></li>
            <li><a href="/developers">Developers /</a></li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>



      
    );
  };
};

// Passes the state to the Header object as props
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);



//  <nav className="navbar navbar-expand-lg navbar-light navbar-transparent" id="navstyle">
//         <a className="navbar-brand" href="/"> <img src={require("./images/coderCoopTexOnly_GREEN.png")}
//           style={{ width: '400px' }} /></a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="/">&lt;home /&gt;<span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/developers">&lt;developers /&gt;</a>
//             </li>
//             {this.renderContent()}
//           </ul>
//         </div>
//       </nav> 