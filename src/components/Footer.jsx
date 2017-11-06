import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 800px;
  margin: 10px auto;
  padding: 20px 0;
`

const FlexItem = styled.li`
  color: brown;
  list-style: none;
  font-family: Oswald;
  font-weight: bold;
  
  a {
    text-decoration: none;
    color: #4b4b4b;
  }
  a:visited {color:#4b4b4b;}
  a:hover {color:#4b4b4b;}
  a:active {color:#4b4b4b;}
`

class Footer extends Component {
  render() {
    return (
      <FlexList>
        <FlexItem><Link to='/'>Home</Link></FlexItem>
        <FlexItem><Link to='/reviews'>Reviews</Link></FlexItem>
        <FlexItem><Link to='/gallery'>Gallery</Link></FlexItem>
        <FlexItem><Link to='/contact'>Contact</Link></FlexItem>
      </FlexList>
    );
  }
}

export default Footer;

