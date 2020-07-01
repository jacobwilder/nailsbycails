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
      <div className="contact-container">
        <h1 className="contact-header">Contact</h1>
        </div>
    );
  }
}

export default About;
