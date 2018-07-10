import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron'
import Homepage from '../../components/Hompage';
import Info from '../../components/info';
import Work from '../../components/work';
import Form from '../../components/form';
import API from "../../utils/API";


class Index extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    userWebsite: "Yes",
    webAddress: "",
    linkSocial: "Yes",
    conceptSummary: ""
  }

  submitUser = () => {
    console.log(this.state);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.submitUser();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  handleGoogleSignup = event => {
    event.preventDefault();
    API.googleSignin();
  };


  handleLogout = event => {
    event.preventDefault();
    API.logout();
  };

  render() {
    return (
      <div>
        <Homepage />
        <Jumbotron />
        <Info />
        <Work />
        {/* <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          handleGoogleSignup={this.handleGoogleSignup}
          handleLogout={this.handleLogout}
          firstName={this.state.firstName} 
          lastName={this.state.lastName} 
          phoneNumber={this.state.phoneNumber} 
          emailAddress={this.state.emailAddress} 
          userWebsite={this.state.userWebsite} 
          webAddress={this.state.webAddress} 
          linkSocial={this.state.linkSocial} 
          conceptSummary={this.state.conceptSummary} 
        /> */}
      </div>
    )
  }
}



export default Index;
