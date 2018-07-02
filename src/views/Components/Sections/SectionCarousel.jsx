import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpeg";
import image2 from "assets/img/bg2.jpeg";
import image3 from "assets/img/bg3.jpeg";
import image4 from "assets/img/bg4.jpeg";
import image5 from "assets/img/bg5.jpeg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <h2>Founding Members</h2>
          <GridContainer>
            <GridItem xs={6} sm= {6} md={6} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h3>
                        <div className="slick-icons" />Scott Witsoe
                      </h3>
                      <h3>Full Stack Developer</h3>
                      <h3>Brewery Background</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h3>
                        <div className="slick-icons" />Sam Pritchard
                      </h3>
                      <h3>Full Stack Developer</h3>
                      <h3>Mechanic Background</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h3>
                        <div className="slick-icons" />Desiree Fuller
                      </h3>
                      <h3>Full Stack Developer</h3>
                      <h3>Mama Bear Background</h3> 
                    </div>
                  </div>
                  <div>
                    <img
                      src={image4}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h3>
                        <div className="slick-icons" />Robert Thompson
                      </h3>
                      <h3>Full Stack Developer</h3>
                      <h3>Male Gigolo Background</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image5}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h3>
                        <div className="slick-icons" />Jimmy Nguyen
                      </h3>
                      <h3>Full Stack Developer</h3>
                      <h3>Production Management Background</h3>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
