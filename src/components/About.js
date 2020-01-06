import React from 'react';
import ProfilePic from '../assets/Images/profilepic.JPG'

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
          <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, ipsum et finibus dignissim, enim felis consequat risus, vel malesuada eros tortor nec ipsum. Pellentesque elementum augue id accumsan pellentesque. Cras eget lectus at augue ultricies maximus et eget tellus. Duis rhoncus sit amet justo vel porttitor. Suspendisse potenti. Sed sit amet blandit dolor. Maecenas nec dolor imperdiet, condimentum risus eu, sodales enim. Fusce fringilla quam tincidunt urna finibus fringilla. Vivamus convallis lorem dui, sed tristique ligula porta ut.

<br></br>
<br></br>Ut nec ante viverra erat interdum volutpat in eget libero. Suspendisse vehicula urna et posuere lobortis. Nam vestibulum arcu volutpat iaculis ornare. Mauris commodo quam et felis malesuada interdum. Donec semper lacus id neque cursus fringilla. Etiam venenatis a dui id semper. Morbi vestibulum dapibus lectus sit amet aliquam. In tristique eros consectetur, elementum turpis aliquam, placerat felis. Nam eget sagittis est. Vivamus ultricies porta sodales. Maecenas elementum metus sit amet velit efficitur congue. Sed auctor urna eget ante scelerisque, a laoreet velit sagittis. Fusce ac enim nec massa aliquam cursus.

<br></br>
<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae pharetra turpis. Phasellus sit amet tellus non metus iaculis sollicitudin auctor a felis. Nunc maximus nunc arcu, a tincidunt odio suscipit auctor. Integer vitae est sem. Nullam nec suscipit diam, in euismod risus. Ut quis iaculis leo. Nam quis eleifend augue, suscipit cursus urna. Maecenas tristique, dolor ac pretium faucibus, felis mi dignissim metus, id luctus velit dui vel dui. Suspendisse potenti. Cras sit amet faucibus lectus. Sed sed tellus ultrices, imperdiet erat ac, ornare nibh. Vivamus fermentum maximus diam.
</p>
<br></br>
<br></br>
  <div className="exp-list">
    <h2 className="about-header">Experience</h2>
      <ul id="experience">
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
      </ul>
  </div>
  <div className="cert-list">    
<h2 className="about-header">Certifications</h2>
      <ul id="certification">
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
      </ul>
  </div>
  <div className="awards-list">
<h2 className="about-header">Awards</h2>
      <ul id="awards">
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
        <li>Vogue Hair and Nails</li>
      </ul>
    </div>
  </div>
    );
  }
}

export default About;
