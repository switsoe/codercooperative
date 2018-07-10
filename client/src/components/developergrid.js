import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './developergrid.css';

class Devs extends Component {
  render() {
    return (
      <Grid>
        <div className="container devgrid">
          <div className="row">
     
          </div>
        </div>

        {/* <Image src={require ("./images/coderCooperative-MAIN.png")}className="header-image img-responsive mx-auto d-block" />   */}
        <img src={require("../components/images/coderCooperative-MAIN.png")} style={{width: '500px', height: '284.114px'}} className="header-image img-responsive mx-auto d-block"/>     
        <Row className="show-grid text-center">
        <div className="col-lg-12">
                <h1 className="text-center devtext">Meet the Developers</h1>
            </div>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={require ("./images/Scott.png")} className="profile-pic rounded-circle" />
            <h2>Scott</h2>
            <p className="devName">I am a freshly minted full-stack web developer that has recently stepped away from operating a brewery I started in 2011. In running a small business, I have always sensed the big picture and developed the skill of seeing around corners. Adaptation and problem solving was a daily occurence. After successfully moving into Strange Craft Beer Company to form Denver’s first co-taproom, I decided it was time for a new challenge and enrolled in the University of Denver’s boot camp certificate program.</p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={require ("./images/Sam.png")} className="profile-pic rounded-circle" />
            <h2>Sam</h2>
            <p className="devName">Full Stack web developer focused on producing professional and usable content that is both functional and visually engaging. Graduating a Full-Stack web development coding boot camp at Denver University has planted a passion for programming that never stops exciting or inspiring me.</p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={require ("./images/Jimmy.png")} className="profile-pic rounded-circle" />
            <h2>Jimmy</h2>
            <p className="devName">I am a Full Stack Developer with 10 years of experience in the Food Production Industry. I've been a Production Manager for many of those years. I am very knowledgeable with HACCP, GMP and OSHA regulation. I have decided to make a career change to better improve my skills and also to test myself. </p>
          </Col>
        </Row>

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} md={4} mdPush={2} className="person-wrapper">
            <Image src={require ("./images/Rob.png")} className="profile-pic rounded-circle" />
            <h2>Rob</h2>
            <p className="devName">Mizzen spyglass rigging lanyard Yellow Jack jolly boat handsomely Sink me fathom code of conduct. Scourge of the seven seas piracy lugsail parrel trysail gangplank holystone spirits blow the man down fore. Blow the man down topsail league trysail barque mizzenmast wench swing the lead Jolly Roger interloper.</p>
          </Col>

          <Col xs={12} sm={4} md={4} mdPush={2}  className="person-wrapper">
            <Image src={require ("./images/Des.png")} className="profile-pic rounded-circle" />
            <h2>Desiree</h2>
            <p className="devName">Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tuakana ki te hii ika. I te hokinga mai o ona tuakana ki tatahi, ka kii atu a Maui, “ka taea e au te haramai i to koutou na taha ki te hii ika?” Engari, ko te whakautu o ona tuakana ki a ia ano, “Kao, he rangatahi noa iho koe”.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Devs;