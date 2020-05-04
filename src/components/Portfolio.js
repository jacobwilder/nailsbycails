import React from 'react';
import { Link } from 'react-router-dom';

import animate from '@jam3/gsap-promise';
import { findDOMNode } from 'react-dom';

class Portfolio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        images: [],
        data: null,
        currentPage: "all"
        // apitoken: ,
        // client_id:,
        // client_secret:,
        // grant_type:,
        // redirect_url:,
        // code:
      };
      this.renderGridData("all");
    }

    renderGridData(language) {
        async function fetchData(){
            let link = "https://api.instagram.com/oauth/access_token";
            if(language !== "all"){
                link = link +
            }
        }
    }
  
    componentDidMount() {
      fetch("https://api.instagram.com/oauth/access_token")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              images: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

export default Portfolio;