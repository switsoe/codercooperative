import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron'
import Info from '../../components/info';
import Work from '../../components/work';
import Form from '../../components/form';
import Header from '../../components/Header';



class Index extends Component {



  render() {
    return (
      <div>
      {/* <Header / > */}
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
