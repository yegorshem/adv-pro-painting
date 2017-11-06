import React, { Component } from 'react';
import styled from 'styled-components';

import BackgroundImage from '../res/image/FullSizeRender.jpg';
import FamilyPhoto from '../res/image/family_photo.jpg';



const GridContainer = styled.div`
  max-width: 50em;
	margin: 0 auto;
	background: url(${BackgroundImage})  fixed;
  background-size: contain;
	/* Enable grid for viewports 600px and wider: */
	@media screen and (min-width: 600px) {
      max-width: none;
      display: grid;
			grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
	}
	
`

const Header = styled.div`
	padding: 1.5em;
	@media screen and (min-width: 600px) {
  	margin: 2em;
    grid-column: 2/4;
	}
	@media screen and (min-width: 850px) {
		margin: 8em;
	}
`

const LeftSideFiller = styled.div`
	@media screen and (min-width: 600px) {
	  background-color: #2b2b2b;
    grid-column: 1;
	}
`
	
const RightSideFiller = styled.div`
	@media screen and (min-width: 600px) {
	  background-color: #2b2b2b;
    grid-column: 4;
	}
`

const ContentText = styled.div`
	padding: 1.5em;
  background-color: #2b2b2b;
  color: #957b5f;
  grid-column: 2;
`
const ContentImage = styled.div`
	padding: 1.5em;
  background-color: #2b2b2b;
  color: #957b5f;
  grid-column: 3;
  @media screen and (min-width: 600px) {
    padding-top: 4em;
  }
`

const Footer = styled.div`
	padding: 1.5em;
  grid-column: 1/5;
  background-color: #000;
  p {
    color: #fff;
  }
`


class About extends Component {
  render() {
    return (
      <GridContainer>
      
          <Header>          
            <h1>About us</h1>
          </Header>
          
          <LeftSideFiller></LeftSideFiller>
          <ContentText>
          
            <h2>Advanced Pro Painting, LLC</h2>
            <p>We have over 5 years of experience. It is our mission to provide excellent workmanship and complete customer satisfaction from start to completion of a project. In order to understand the needs and expectations of our customers, we take great care to work and communicate with every customer in a professional manner. Our reputation is based on service, safety, and quality, regardless of how large or small the job.
            </p>
            </ContentText>
            <ContentImage>
            <img src={FamilyPhoto} alt='family'/>
          </ContentImage>
          <RightSideFiller></RightSideFiller>
  
          <Footer>
            <h2>Footer</h2>
            <p>The place where site nav and other meta info typically appear.
            </p>
          </Footer>
          
      </GridContainer>
    );
  }
}

export default About;
