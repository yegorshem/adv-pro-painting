import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Footer from './Footer'

import Home1 from '../res/image/home3.jpg'
import Home3 from '../res/image/home1.jpg'
import Russia from '../res/image/russia.jpeg'

import BackgroundImage from '../res/image/home_background.jpg';

const PageContainer = styled.div`
  background: url(${BackgroundImage}) no-repeat fixed;
  background-size: cover;
  color: #957b5f;
`

const HomeImage = styled.img`
  width: 480px;
  float: right;
  padding: 20px;
`;

const FullWidthColor = styled.div`
  background-color: #2b2b2b;
`

const Content = styled.div`
  margin: 0
  width: 800px;
  padding: 20px 200px;

  h1, h3 {
    text-align:center;
  }
`

const FlexContainer = styled.div`
  display: flex;
`

const FlexItem = styled.div`
  
`

const FlexItemText = styled.div`
  padding-top: 50px;
`

const Line = styled.hr`
  background-color: #668af1;
  width: 150px;
`

const Spacer = styled.div`
  height: 600px;
  margin: 0;
  padding: 0;
`

const MiniSpacer = styled.div`
  height: 200px;
`

class Home extends Component {
  render() {
    return (
      <PageContainer>
      <NavBar />
      <Spacer />
      <FullWidthColor>
        <Content>
          <h1>What We Do</h1>
          <Line />
          <FlexContainer>
            <FlexItemText>
              <h3>Residential Exterior Painting</h3>
              <Line />
              <p>Painting the exteriors of homes, condominiums and offices for a unique
                 set of skills by the painting contractor.</p>
              <p>We excel at painting exteriors
                 because we offer you all the necessary requirements to successfully
                 complete your project.</p>
            </FlexItemText>
            <FlexItem>
              <HomeImage src={Home1} alt='image of painted house' />
            </FlexItem>
          </FlexContainer>
          <FlexContainer>
            <FlexItem>
              <HomeImage src={Home3} alt='image of painted house' />
            </FlexItem>
            <FlexItemText>
              <h3>Residential Interior Painting</h3>
              <Line />
              <p>A new coat of paint will also add value to a home that is about to
                 be put on a market.</p>
              <p>Freshen up your interior surfaces with a non-toxic Zero Voc paint.</p>
            </FlexItemText>
          </FlexContainer>
          <FlexContainer>
            <FlexItemText>
              <h3>Commercial Exterior & Interior Painting</h3>
              <Line />
              <p>Let us refresh your commercial property, we can be the painting company 
                 to help make sure your workdays are as wonderful as our own.</p>
            </FlexItemText>
            <FlexItem>
              <HomeImage src={Russia} alt='image of painted house' />
            </FlexItem>
          </FlexContainer>
        </Content>
      </FullWidthColor>
      <MiniSpacer />
      <Footer />
      </PageContainer>);
  }
}

export default Home;
