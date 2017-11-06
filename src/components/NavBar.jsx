import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../res/image/drupal.png'

const FlexList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 800px;
  margin: 0px auto;
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

const Logo = styled.span`
  color: red;
  font-size: 1.5em;
`

class NavBar extends Component {
  render() {
    return (
      <FlexList>
        <FlexItem><Logo><Link to='/'><img src={logo} width="50px" alt="logo" /></Link></Logo></FlexItem>
        <FlexItem><Link to='/'>Home</Link></FlexItem>
        <FlexItem><Link to='/reviews'>Reviews</Link></FlexItem>
        <FlexItem><Link to='/gallery'>Gallery</Link></FlexItem>
        <FlexItem><Link to='/contact'>Contact</Link></FlexItem>
        <FlexItem><Link to='/about'>About</Link></FlexItem>

      </FlexList>
    );
  }
}

export default NavBar;
