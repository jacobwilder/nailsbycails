import React from 'react';
import ProfilePic from '../assets/Images/profilepic.JPG';
import PriceList from '../assets/Images/pricelist2.JPG'
import PriceList2 from '../assets/Images/pricelist3.JPG'

import animate from '@jam3/gsap-promise';
import { findDOMNode } from 'react-dom';


class About extends React.Component {
  componentDidMount() {
    animate.from(this.header, 0.2, { y: -200, delay: 0.1 });
    animate.from(this.button, 0.3, {
      y: 1200,
      opacity: 0.5,
      delay: 0.2
    });
  }


  render() {
    return (
      <div className="about-container">
        <h1 className="about-header">About Me</h1>
          <img className="profile-pic" src={ProfilePic}></img>
          <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed aliquam, ipsum et finibus dignissim, enim felis consequat risus, vel malesuada eros tortor nec ipsum. 
            Pellentesque elementum augue id accumsan pellentesque. Cras eget lectus at augue ultricies maximus et eget tellus. 
            Prices on all work can be found below!
          </p>
          <br></br>
        <div className="price-container">
          <img className="price-list" src={PriceList}></img>
          <img className="price-list" src={PriceList2}></img>
        </div>
      </div>
    );
  }
}

export default About;
