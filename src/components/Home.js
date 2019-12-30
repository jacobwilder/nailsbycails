import React from 'react';
import { Link } from 'react-router-dom';

import animate from '@jam3/gsap-promise';
import { findDOMNode } from 'react-dom';


class Home extends React.Component {
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
      <div className="home-container">
        <h1 className="home-header" ref={c => (this.header = c)}>
          Nails by Cails
        </h1>

        <Link
          ref={l => (this.button = findDOMNode(l))}
          className="button"
          to="/about"
        >
          Enter
        </Link>
      </div>
    );
  }
}

export default Home;
